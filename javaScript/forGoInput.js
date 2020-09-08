$('.forGo').on('click', function () {
    let nameOfTheYourRest =
        $('#place').val().trim().toLowerCase();

    switch (nameOfTheYourRest) {
        case 'australia':
            location.href = "html/australia.html";
            break;

        case 'europe':
            location.href = "html/classicEurope.html";
            break;

        case 'north america':
            location.href = "html/modernNorthAmerica.html";
            break;

        case 'south america':
            location.href = "html/ancientSouthAmerica.html";
            break;
    }
});

$('.subscribe').on('click', function () {
    $(".email-adress").val("You are not registered!").css({
        "color": "red",
        "font-size": "20px"
    });
});

$('.australia-block').on('click', function () {
    location.href = "html/australia.html";
});

$('.south-america-block').on('click', function () {
    location.href = "html/ancientSouthAmerica.html";
});

$('.north-america-block').on('click', function () {
    location.href = "html/modernNorthAmerica.html";
});

$('.europe-block').on('click', function () {
    location.href = "html/classicEurope.html";
});