export const generateRandomColor = (): string =>
{
	let maxVal = 0xFFFFFF;
	let randomNumber: number = Math.random() * maxVal;
	randomNumber = Math.floor(randomNumber);
	let X: string = randomNumber.toString(16);
	let randomColor: string = X.padStart(6, "0");
	return `#${randomColor.toUpperCase()}`
}