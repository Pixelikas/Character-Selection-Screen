const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.Pin,
		C3.Behaviors.scrollto,
		C3.Plugins.Mouse,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Behaviors.Pin.Acts.Pin,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{Fundo: 0},
	{Text: 0},
	{Caixa1: 0},
	{Caixa2: 0},
	{Caixa3: 0},
	{Caixa4: 0},
	{FundoFase: 0},
	{Solid: 0},
	{Chão: 0},
	{Plataforma: 0},
	{Platform: 0},
	{Personagem1: 0},
	{Personagem2: 0},
	{Personagem3: 0},
	{Personagem4: 0},
	{Pin: 0},
	{ScrollTo: 0},
	{Spawn: 0},
	{Mouse: 0},
	{ParedeEsquerda: 0},
	{ParedeDireita: 0},
	{Personagem: 0}
];

self.InstanceType = {
	Fundo: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Caixa1: class extends self.ISpriteInstance {},
	Caixa2: class extends self.ISpriteInstance {},
	Caixa3: class extends self.ISpriteInstance {},
	Caixa4: class extends self.ISpriteInstance {},
	FundoFase: class extends self.ISpriteInstance {},
	Chão: class extends self.ISpriteInstance {},
	Plataforma: class extends self.ISpriteInstance {},
	Personagem1: class extends self.ISpriteInstance {},
	Personagem2: class extends self.ISpriteInstance {},
	Personagem3: class extends self.ISpriteInstance {},
	Personagem4: class extends self.ISpriteInstance {},
	Spawn: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	ParedeEsquerda: class extends self.ISpriteInstance {},
	ParedeDireita: class extends self.ISpriteInstance {}
}