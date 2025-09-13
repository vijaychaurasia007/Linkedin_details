document.getElementById("fetchBtn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "getProfile" }, async (profileData) => {
      if (!profileData) {
        document.getElementById("result").innerText = "No profile data found.";
        return;
      }

      const { fullName, designation, organisation, linkedin_handle } = profileData;
      if (!fullName || !organisation) {
        document.getElementById("result").innerText = "Insufficient data from LinkedIn profile.";
        return;
      }

      const [firstName, ...lastParts] = document.getElementsByClassName("ember-view NwKyLgMeaCNcXeWbrxEJRFaOGbKhBxpUwqyI").split(" ");
      const lastName = lastParts.join(" ");
      const domain = organisation.replace(/\s+/g, "").toLowerCase() + ".com";

      const apiKey = "6a6a80dd50256f5329d806b7271b042ac1d165c1"; // <-- replace with your key
      let email = "No email found";
      let enrichedData = null;

      try {
        // Step 1: Find email
        const emailRes = await fetch(
          `https://api.hunter.io/v2/email-finder?domain=${domain}&first_name=${encodeURIComponent(firstName)}&last_name=${encodeURIComponent(lastName)}&api_key=${apiKey}`
        );
        const emailData = await emailRes.json();

        if (emailData.data && emailData.data.email) {
          email = emailData.data.email;

          // Step 2: Enrich with people/find
          const peopleRes = await fetch(
            `https://api.hunter.io/v2/people/find?email=${encodeURIComponent(email)}&linkedin_handle=${linkedin_handle}&api_key=${apiKey}`
          );
          const peopleData = await peopleRes.json();
          enrichedData = peopleData.data || null;
        }
      } catch (err) {
        email = "Error fetching email";
      }

      // Build final output
      let resultText =
        `Full Name: ${fullName}\n` +
        `Designation: ${designation || "No data"}\n` +
        `Organisation: ${organisation || "No data"}\n` +
        `Email: ${email}\n`;

      if (enrichedData) {
        resultText += `\n--- Enriched Data ---\n`;
        if (enrichedData.first_name) resultText += `First Name: ${enrichedData.first_name}\n`;
        if (enrichedData.last_name) resultText += `Last Name: ${enrichedData.last_name}\n`;
        if (enrichedData.position) resultText += `Position: ${enrichedData.position}\n`;
        if (enrichedData.company) resultText += `Company: ${enrichedData.company}\n`;
        if (enrichedData.linkedin) resultText += `LinkedIn: ${enrichedData.linkedin}\n`;
      }

      document.getElementById("result").innerText = resultText;
    });
  });
});
