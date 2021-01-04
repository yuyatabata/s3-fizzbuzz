export interface FizzBuzzSetting{
    from: number
    to: number
    fizz?: number
    buzz?: number
}

export const isFizzBuzzSetting = (obj: any): obj is FizzBuzzSetting => {
    return typeof obj.from === "number"
        && typeof obj.to === "number"
        && (!obj.fizz || typeof obj.fizz === "number")
        && (!obj.buzz || typeof obj.buzz === "number");
}

const isPositiveInt = (n:number): boolean => n > 0 && Math.floor(n) === n;

const validate = ({from, to, fizz=3, buzz=5}: FizzBuzzSetting):Required<FizzBuzzSetting> => {
    if(!isPositiveInt(from)) throw new Error(`from:${from}は正の整数である必要があります。`);
    if(!isPositiveInt(to)) throw new Error(`to:${to}は正の整数である必要があります。`);
    if(to <= from) throw new Error(`to:${to}はfrom:${from}よりも大きい数字である必要があります。`);
    if(!isPositiveInt(fizz)) throw new Error(`fizz:${fizz}は正の整数である必要があります`);
    if(!isPositiveInt(buzz)) throw new Error(`buzz:${buzz}は正の整数である必要があります。`);
    if(fizz === buzz) throw new Error(`fizz:${fizz}とbuzz:${buzz}は異なる数値である必要があります。`);

    return {from,to,fizz,buzz};
}