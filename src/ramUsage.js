const os = require("os");

setInterval(() => {
    const { arch, platform, totalmem, freemem } = os;
    const tRam = totalmem() / 1024 / 1024
    const fRam = freemem() / 1024 / 1024
    const usage = tRam - fRam

    const stats = {
        OS: platform(),
        Arch: arch(),
        TotalRAM: `${parseInt(tRam)} MB`,
        FreeRAM: `${parseInt(fRam)} MB`,
        Usage: `${parseInt(usage)} MB`
    }

    console.clear();
    console.table(stats);
    exports.stats = stats;
}, 1000);
