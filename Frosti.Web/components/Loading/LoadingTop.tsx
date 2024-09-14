import NextNProgress from 'nextjs-progressbar';

const getRgb = () => Math.floor(Math.random() * 127) + 128;
const rgbtoHex = (r: number, g: number, b: number) =>
    [r, g, b]
        .map((x) => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        })
        .join('');

export const handleGenerate = () => {
    const color = {
        r: getRgb(),
        g: getRgb(),
        b: getRgb(),
    };
    return rgbtoHex(color.r, color.g, color.b);
};
export function Loading() {


    return (
        <NextNProgress color={'#' + handleGenerate()} startPosition={0.3} stopDelayMs={200} height={5} showOnShallow={true} />
    );
}
export default Loading;
