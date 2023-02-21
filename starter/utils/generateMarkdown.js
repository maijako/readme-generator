// function to generate markdown for README
function generateMarkdown(data) {
  //variables to store license badge and link date
  let licenseBadge = ""
  let licenseLink = ""
  //ES6 obj destructuring to avoid re-typing data.variablename
  const {
    title,
    description,
    installation,
    usage,
    license,
    contributing,
    tests,
    gitUserName,
    gitUserLink,
    userEmail
  } = data;

  //switch case for the license variable to store user selected data and badge
  switch (license) {
    case 'MIT':

      badgeLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      licenseLink = "(https://opensource.org/licenses/MIT)";
      break;
     
  }

  const readmeContent = `# ${title}
  
  ## Description
  ${description}
  
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}
  
  
  ## Licence
  
  This project uses ${license}.
  
  ## Contributing
  ${contributing}
  
  
  ## Tests
  ${tests}
  
  ## Questions
  This project was developed by ${[gitUserName]}${(gitUserLink)}.
  Please email any questions to ${userEmail}.
`;
return readmeContent;
}

module.exports = generateMarkdown;
