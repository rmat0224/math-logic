interface Cache {
    index: number;
    value: number;
}

/**
 * 円周率を求める関数(仮)
 */
class Pi {
    cacheA: Cache[];
    cacheB: Cache[];

    /**
     * 初期化
     */
    constructor() {
        this.cacheA = [{
            index: 0,
            value: 1/(2*Math.sqrt(3)),
        }];
        this.cacheB = [{
            index: 0,
            value: 1/3,
        }];
    }

    public run(n: number): number {
        return 1/this.a(n);
    }

    /**
     * a[n] = 1/2*(a[n-1]+b[n-1])
     * @param n 
     * @returns 
     */
    private a(n: number): number {
        if (n <= 0) return this.cacheA.find(cache => cache.index === 0).value;
        const cache = this.cacheA.find(cache => cache.index === n);
        if (cache) return cache.value;
        const an = 1/2*(this.a(n-1)+this.b(n-1));
        this.cacheA.push({
            index: n,
            value: an
        });
        return an;
    }

    /**
     * b[n] = Math.sqrt(a[n]*b[n-1])
     * @param n 
     * @returns 
     */
    private b(n: number) {
        if (n < 0) return this.cacheB.find(cache => cache.index === 0).value;
        const cache = this.cacheB.find(cache => cache.index === n);
        if (cache) return cache.value;
        const bn = Math.sqrt(this.a(n)*this.b(n-1));
        this.cacheA.push({
            index: n,
            value: bn
        });
        return bn;
    }
}

export default Pi;