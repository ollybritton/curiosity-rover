/*jshint esversion: 6 */

function elem(target) {
  return $("[js-target='" + target + "']");
}

function set_image(element, name) {
  console.log("In set_image function, with values", element, name)
  name = "url(../../assets/img/" + name + ")";
  console.log(name);
  element.css("background-image", name);
  console.log(element.css("background-image"))
}

function sol_name(image_data, type = "compressed/front_avoidance") {
  let sol_number = image_data.sol_number;
  let image_number = image_data.image_number;

  return type + "/sol_" + sol_number + "_image_" + image_number + ".jpg";
}

function avaliable_images(sol_number) {
  let picture_numbers = sol_data[String(sol_number)];

  if (picture_numbers == undefined) {
    return [];
  } else {
    return picture_numbers;
  }
}

function next_image(image_data, amount = 1) {
  for (var i = 0; i < amount; i++) {
    console.log("In next_image function with parameters:", image_data, amount)

    let sol_number = image_data.sol_number;
    console.log(sol_number)
    let image_number = image_data.image_number;
    console.log(image_number)

    let avaliable = avaliable_images(sol_number);
    console.log(avaliable)

    if (sol_number > 2210) {
      return {
        sol_number: 2210,
        image_number: 0
      };
    }

    if (sol_number < 14) {
      return {
        sol_number: 15,
        image_number: 0
      };
    }

    if (avaliable.indexOf(image_number + 1) == -1) {
      next = 1;

      while (JSON.stringify(avaliable_images(sol_number + next)) == "[]" && sol_number + next < 2210 && sol_number + next > 0) {
        console.log(next, JSON.stringify(avaliable_images(sol_number + next)));
        next += 1;
      }

      image_data = {
        sol_number: sol_number + next,
        image_number: 0
      };

    } else {
      image_data = {
        sol_number: sol_number,
        image_number: image_number + 1
      };
    }
  }

  return image_data;
}

function previous_sol_info(image_data) {
  let sol = image_data.sol_number;

  let subtract_amount = 0;

  while (day_info[sol - subtract_amount] == undefined) {
    subtract_amount += 1;
  }

  return day_info[sol - subtract_amount]
}

function previous_image(image_data, amount = 1) {
  for (var i = 0; i < amount; i++) {
    let sol_number = image_data.sol_number;
    let image_number = image_data.image_number;

    let avaliable = avaliable_images(sol_number);

    if (sol_number > 2210) {
      return {
        sol_number: 2210,
        image_number: 0
      };
    }

    if (sol_number < 14) {
      return {
        sol_number: 15,
        image_number: 0
      };
    }

    if (image_number - 1 < 0) {
      next = 1;

      while (avaliable_images(sol_number - next)[0] == undefined && sol_number - next < 2210 && sol_number - next > 13) {
        next += 1;
      }

      image_data = {
        sol_number: sol_number - next,
        image_number: avaliable_images(sol_number - next)[avaliable_images(sol_number - next).length - 1]
      };

    } else {
      image_data = {
        sol_number: sol_number,
        image_number: image_number - 1
      };
    }
  }

  return image_data;
}

function show(elem, type = "flex") {
  elem.style.display = type;
}

function hide(elem) {
  elem.style.display = "none";
}

function addClass(elem, val) {
  elem.classList.add(val);
}

function removeClass(elem, val) {
  elem.classList.remove(val);
}

function toggleClass(elem, val) {
  elem.classList.toggle(val);
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}