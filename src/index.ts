import Pi from "./lib/pi";

(() => {
    const _num = process.argv[2];
    console.log(_num);
    const num = Number(_num);
    if (isNaN(num)) {
        console.error('数値を入力してください。');
        return;
    }
    const pi = new Pi();
    console.log(pi.run(num));
})();