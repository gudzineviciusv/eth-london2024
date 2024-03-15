import {BigNumber} from "ethers";
import {formatUnits} from "ethers/lib/utils";

export const n6 = new Intl.NumberFormat("en-us", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 6
});

export const n4 = new Intl.NumberFormat("en-us", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 4
});

export const c2 = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

export const getEllipsisTxt = (str: string, n = 6) => {
    if (str) {
        return `${str.slice(0, n)}...${str.slice(str.length - n)}`;
    }
    return "";
};

export const tokenValue = (value: number, decimals: number) => (decimals ? value / Math.pow(10, decimals) : value);

export const tokenValueTxt = (value: number, decimals: number, symbol: string) => {
    return `${n4.format(tokenValue(value, decimals))} ${symbol}`;
};

export function parseBigNumberToFloat(val: BigNumber, decimals = 18) {
    if (!val) {
        return 0;
    }

    const formatted = formatUnits(val, decimals);
    return parseFloat(formatted);
}
