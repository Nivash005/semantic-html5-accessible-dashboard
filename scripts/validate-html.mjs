const files = ["index.html", "services.html", "reports.html"];
let failed = false;

for (const file of files) {
  const html = await (await import("node:fs/promises")).readFile(file, "utf8");

  let response;
  try {
    response = await fetch("https://validator.w3.org/nu/?out=json", {
      method: "POST",
      headers: { "Content-Type": "text/html; charset=utf-8" },
      body: html
    });
  } catch (error) {
    console.error(`Could not reach the W3C Nu HTML Checker for ${file}: ${error.message}`);
    failed = true;
    continue;
  }

  if (!response.ok) {
    console.error(`W3C validation request failed for ${file}: HTTP ${response.status}`);
    failed = true;
    continue;
  }

  const result = await response.json();
  const issues = (result.messages || []).filter((message) => message.type === "error" || message.type === "warning");

  if (issues.length) {
    console.error(`W3C validation reported issues in ${file}:`);
    for (const issue of issues) {
      console.error(`- [${issue.type}] ${issue.message}`);
    }
    if (issues.some((issue) => issue.type === "error")) failed = true;
  } else {
    console.log(`W3C validation passed: ${file}`);
  }
}

process.exitCode = failed ? 1 : 0;
