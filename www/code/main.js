const k = kaplay({
	width: 855,
	height: 415
});

k.loadBean();

k.setGravity(1000);

const player = k.add([
	k.sprite("bean"),
	k.pos(k.center()),
	k.area(),
	k.body(),
])

onClick(
	() => {
		if (player.isGrounded()) player.jump()
	})


k.add([
	k.rect(k.width(), 120),
	k.pos(0, 325),
	k.area(),
	k.outline(4),
	k.body({ isStatic: true }),
])