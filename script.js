let canvas; 

let illustration1;  // he/him links
let illustration2;  // they/them midden
let illustration3;  // she/her rechts

let skin;           // contains all skincolor values
let skincolor;      // skincolor dropdown select
let checkSkinValue; // function checks skincolor

let hair;           // contains all haircolor values
let haircolor;      // haircolor dropdown select
let checkHairValue; // function checks haircolor

let clothes;        // contains all clothes values
let colorPicker;    // clothes colorpicker
let colorPicker2;   // eyes colorpicker
let colorPicker3;   // background colorpicker

function setup() {
  canvas = createCanvas(1200, 600);
  // 9 skincolors total
  skincolor = createSelect().position(1230, 100); 
  // dark skintones
  skincolor.option('Black');
  skincolor.option('Mocka');
  // medium skintones
  skincolor.option('Umber');
  skincolor.option('Toffee');
  skincolor.option('Caramel');
  skincolor.option('Auburn');
  skincolor.option('Almond');
  // White skintones
  skincolor.option('Beige');
  skincolor.option('White');
  skincolor.selected('Auburn');
  // 6 haircolors total
  haircolor = createSelect().position(1230, 215); 
  haircolor.option('Golden');
  haircolor.option('Honey');
  haircolor.option('Hazelnut');
  haircolor.option('Copper');
  haircolor.option('Mahogany');
  haircolor.option('Chocolate');
  haircolor.selected('Hazelnut');
  // 6 haircolors total
  colorPicker = createColorPicker('#594474').position(1230, 325);
  colorPicker2 = createColorPicker('#0a0c25').position(1290, 325);
  colorPicker3 = createColorPicker('#fcf7ef').position(1230, 440);
}

function draw() {
  // changes canvas background
  background(colorPicker3.color());
  // then html background changes
  select('html').style('background', (colorPicker3.color()));
  
  // calls all svg (html) illustrations on to canvas 
  select('#illustration-01').position(75, 125);
  select('#illustration-02').position(425, 100);
  select('#illustration-03').position(750, 77);

  // makes array all clothes classes
  let clothes = selectAll('g .clothes');
  // loops array to change colors
  for (let i = 0; i < 13; i++) {
    clothes[i].style('fill', colorPicker.color());
  }

  // makes array all eyes classes
  let eyes = selectAll('g .eyes');
  // reads colorpicker value
  eyesColor = colorPicker2.color();
  // loops array to change colors
  for (let i = 0; i < 6; i++) {
    eyes[i].style('fill', eyesColor);
  }

  // calls checkSkinValue value when skincolor changes
  skincolor.changed(checkSkinValue);

  // reads chosenSkin value, selects all skin classes and then recolors when called
  function checkSkinValue() {
    let chosenSkin = skincolor.value();
    let skin = selectAll('svg .skin');

    if (chosenSkin === 'Black') {
      for (let i = 0; i < 15; i++) {
        skin[i].style('fill', '#503335');
      }
    } else if (chosenSkin === 'Mocka') {
      for (let i = 0; i < 15; i++) {
        skin[i].style('fill', '#5f342f');
      }
    } else if (chosenSkin === 'Auburn') {
      for (let i = 0; i < 15; i++) {
        skin[i].style('fill', '#a1665e');
      }
    } else if (chosenSkin === 'Umber') {
      for (let i = 0; i < 15; i++) {
        skin[i].style('fill', '#7d4b44');
      }
    } else if (chosenSkin === 'Toffee') {
      for (let i = 0; i < 15; i++) {
        skin[i].style('fill', '#885c3d');
      }
    } else if (chosenSkin === 'Caramel') {
      for (let i = 0; i < 15; i++) {
        skin[i].style('fill', '#864d36');
      }
    } else if (chosenSkin === 'Almond') {
      for (let i = 0; i < 15; i++) {
        skin[i].style('fill', '#c58c85');
      }
    } else if (chosenSkin === 'Beige') {
      for (let i = 0; i < 15; i++) {
        skin[i].style('fill', '#c79a9b');
      }
    } else if (chosenSkin === 'White') {
      for (let i = 0; i < 15; i++) {
        skin[i].style('fill', '#ecbcb4');
      }
    } else { 
        // skin[i].style('fill', '#ecbcb4');
    }
  }

  // calls checkHairValue value when haircolor changes
  haircolor.changed(checkHairValue);
  // reads chosenHair value, selects all hair classes and then recolors when called
  function checkHairValue() { 
    let chosenHair = haircolor.value();
    let hair = selectAll('g .hair');

    if (chosenHair === 'Golden') {
      for (let i = 0; i < 15; i++) {
        hair[i].style('fill', '#debe99');
      }
    } else if (chosenHair === 'Honey') {
      for (let i = 0; i < 15; i++) {
        hair[i].style('fill', '#aa8866');
      }
    } else if (chosenHair === 'Hazelnut') {
      for (let i = 0; i < 15; i++) {
        hair[i].style('fill', '#6a330d');
      }
    } else if (chosenHair === 'Copper') {
      for (let i = 0; i < 15; i++) {
        hair[i].style('fill', '#9a3300');
      }
    } else if (chosenHair === 'Mahogany') {
      for (let i = 0; i < 15; i++) {
        hair[i].style('fill', '#4f1a00');
      }
    } else if (chosenHair === 'Chocolate') {
      for (let i = 0; i < 15; i++) {
        hair[i].style('fill', '#241c11');
      }
    } else { }
  }
}



