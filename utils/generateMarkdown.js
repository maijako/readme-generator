// function to generate markdown for README
function generateMarkdown(data) {

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

  //variables to store license badge and link date
    let licenseBadge = "";
    let licenseLink = "";
    

  //switch case for the license variable to store user selected data and badge
  switch (license) {
    case "Artistic license 2.0":
      licenseBadge = "![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)";
      licenseLink = "(https://opensource.org/licenses/Artistic-2.0)";
      break;

      case "Creative Commons Attribution 4.0":
      licenseBadge = "![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)";
      licenseLink = "(https://creativecommons.org/licenses/by/4.0/)";
      break;

      case "GNU General Public License v3.0":
      licenseBadge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      licenseLink = "(https://www.gnu.org/licenses/gpl-3.0)";
      break;
  
    case 'MIT':
      licenseBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      licenseLink = "(https://opensource.org/licenses/MIT)";
      break;

      case 'Open Database License':
      licenseBadge = "![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)";
      licenseLink = "(https://opendatacommons.org/licenses/odbl/)";
      break;
  }

  const readmeContent = `# ${title}
  ${licenseBadge}
  
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
  
  [${license}](${licenseLink})
  
  ## Contributing
  ${contributing}
  
  
  ## Tests
  ${tests}
  
  ## Questions
  Developer GitHub profile: [${gitUserName}](${gitUserLink}).
  Please email any questions to ${userEmail}.
`;
return readmeContent;
}

module.exports = generateMarkdown;
