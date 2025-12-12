const k = kaplay({
	width: 1280,
	height: 720,
});

k.loadBean();

k.setGravity(1500);

const player = k.add([
	k.sprite("bean"),
	k.pos(k.center()),
	k.area(),
	k.body(),
	k.offscreen()
])

onClick(
	() => {
		if (player.isGrounded()) player.jump()
	})
	
	player.onExitScreen(() => {
		k.go("gameover");
	});
	
	k.scene("gameover", () => {
		k.add([
			k.text("You Lose"),
			k.pos(k.center()),
		])
	})
	

const ground = k.add([
	k.rect(k.width(), k.height() / 3),
	k.pos(0, k.height()),
	k.area(),
	k.anchor("botleft"),
	k.outline(4),
	k.body({ isStatic: true }),
])


k.onResize(() => {
	ground.pos.y = k.height();
	ground.width = k.width();
})

let counter = 0;
const counterUI = k.add([k.text("0")])

k.loop(1, () => {
	counter++;
	counterUI.text = counter;
	const speeds = [280, 320, 450, 900];
	const currentSpeed = speeds[Math.floor(Math.random() * speeds.length)];
	
	
	k.add([
		k.rect(45, 75),
		k.pos(k.width(), (ground.pos.y - ground.height)),
		k.outline(3),
		k.anchor("botleft"),
		k.area(),
		k.body(),
		k.move(k.vec2(-1, 0), currentSpeed),
	])

})


