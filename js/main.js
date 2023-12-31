async function typeSentence(sentence, eleRef) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(70);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
  }
  
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(70);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
  }

  const carouselText = [
    {text: "store fronts."},
    {text: "event pages."},
    {text: "landings."}
  ]
  
  async function carousel(carouselList, eleRef) {
      var i = 0;
      while(true) {
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++
        if(i >= carouselList.length) {i = 0;}
      }
  }

  $( document ).ready(carousel(carouselText, "#sentence"));

  