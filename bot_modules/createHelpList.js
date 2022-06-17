export default function(parentElement) {
  /* Creates the list of links for User to help him navigate and find him content what he look for */

  fetch('./assets/helpContent.json')
    .then(response => response.json())
    .then(json => console.log(json));

  console.log();

  // const contentList = document.createElement('dl');
  //       contentList.setAttribute('id', 'helpList');
  //       contentList.setAttribute('class', 'helpList');
};
