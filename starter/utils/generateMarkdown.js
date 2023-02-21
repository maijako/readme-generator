// function to generate markdown for README
function generateMarkdown(data) {
  //variables to store license badge and link date
  let licenseBadge = ""
  let licenseLink = ""


  return `# ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  
  ## Licence
  
  This project uses ${data.license}.
  
  ## Contributing
  ${data.contributing}
  
  
  ## Tests
  ${data.tests}
  
  ## Questions
  This project was developed by ${[data.gitUserName]}${(gitUserLink)}.
  Please email any questions to ${data.userEmail}.
`;
}

module.exports = generateMarkdown;
