document.addEventListener('DOMContentLoaded', () => {
    anime.timeline({
        easing: "easeOutExpo",
    })
    .add({
        targets: ".title-1",
        opacity: [0, 1],
        translateX: [-2000, 0],
        offset: "0",
    })
    .add({
        targets: ".title-2",
        opacity: [0, 1],
        translateX: [-2000, 0],
        offset: "500",
    })
    .add({
        targets: ".pattern",
        opacity: [0, 1],
        offset: "1000",
    })
    .add({
        targets: ".runner",
        opacity: [0, 1],
        translateX: [-2000, 0],
        offset: "2000",
    })
    .add({
        targets: ".box-1",
        opacity: [0, 1],
        translateX: [200, 0],
        rotate: 60,
        offset: "2200",
        easing: 'easeOutElastic',
    })
    .add({
        targets: ".box-2",
        opacity: [0, 1],
        translateX: [200, 0],
        rotate: -110,
        offset: "2200",
        easing: 'easeOutElastic',
    })
    .add({
        targets: ".box-3",
        opacity: [0, 1],
        translateX: [200, 0],
        rotate: 30,
        offset: "2200",
        easing: 'easeOutElastic',
    })
    .add({
        targets: ".content",
        opacity: [0, 1],
        translateX: [200, 0],
        offset: "500",
    })
    .add({
        targets: ".media",
        translateX: [-2000, 0],
        offset: "2500",
    })
    .add({
        targets: ".nav",
        translateY: [-2000, 0],
        offset: "2500",
    })
})