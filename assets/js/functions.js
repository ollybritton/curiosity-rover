/*jshint esversion: 6 */
const initial_image = {
    sol_number: 100,
    image_number: 0
};

const image = elem("image");
const pre_image = elem("pre-image");

const sol_number_display = elem("sol-number-display");
const small_sol_number = elem("small-sol-number");
const picture_number = elem("picture-number");
const nasa_link = elem("nasa-link");

const info_text = elem("text");

let current_image = initial_image;
let slider_check_amount = 0;

//const slider = elem("slider");

// =============================================

function set_current(load_behind = next_image) {
    console.log("Setting current");
    console.log(sol_name(current_image));
    set_image(image, sol_name(current_image));
    console.log(sol_name(load_behind(current_image)));
    set_image(pre_image, sol_name(load_behind(current_image)));

    sol_number_display.text(current_image.sol_number);
    small_sol_number.text(current_image.sol_number);

    picture_number.text(`Picture ${current_image.image_number}`);
    prev_info = previous_sol_info(current_image);

    info_text.html(prev_info.text);
    nasa_link.attr("href", prev_info.url);
}

function set_next(amount = 1) {
    current_image = next_image(current_image, amount);
    set_current(next_image);

    prev_info = previous_sol_info(current_image);


    info_text.html(prev_info.text);
    nasa_link.attr("href", prev_info.url);
}

function set_previous(amount = 1) {
    current_image = previous_image(current_image, amount);
    set_current(previous_image);

    prev_info = previous_sol_info(current_image);

    info_text.html(prev_info.text);
    nasa_link.attr("href", prev_info.url);
}

function set_random() {
    current_image = next_image({
        sol_number: randomInt(20, 2210),
        image_number: 0
    });
    set_current();
}

// function set_slider() {
//     console.log("Setting image based on slider value...", slider.val())
//     current_image = {
//         sol_number: slider.val(),
//         image_number: 0
//     };

//     console.log("Corresponding image object", current_image)

//     current_image = next_image(current_image)

//     console.log("Next image called to avoid not found errors", current_image);
//     set_current();
// }

// =============================================

document.addEventListener("keydown", e => {
    if (e.key == "ArrowRight") {
        // Move 1 ahead.
        set_next();
    } else if (e.key == "ArrowLeft") {
        // Move 1 behind.
        set_previous();
    }

    if (e.key == "p") {
        // Move 1 ahead.
        set_next(1);
    } else if (e.key == "i") {
        // Move 1 behind.
        set_previous(1);
    }

    if (e.key == "l") {
        // Move 10 ahead.
        set_next(10);
    } else if (e.key == "j") {
        // Move 10 behind.
        set_previous(10);
    }

    if (e.key == "m") {
        // Move 100 ahead.
        set_next(100);
    } else if (e.key == "b") {
        // Move 100 behind.
        set_previous(100);
    }

    if (e.key == "r") {
        // Jump to a random point.
        set_random();
    }
});

// slider.bind("change", function () {
//     console.log(slider.val());
//     set_slider();
// });

(function () {
    set_random();
})();