const express = require("express");
const os = require("os");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

function getSystemInfo() {
    return {
        hostname: os.hostname(),
        osType: os.type(), // Windows, Linux, Darwin (macOS)
        platform: os.platform(), // win32, linux, darwin
        arch: os.arch(), // x64, arm, arm64, ia32, etc.
        release: os.release(),
        uptime: os.uptime(),
        totalMemory: `${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
        freeMemory: `${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
        cpuCores: os.cpus().length,
        cpuModel: os.cpus()[0].model,
        loadAverage: os.loadavg(), // Only for Unix-based systems
        networkInterfaces: os.networkInterfaces(),
        userInfo: os.userInfo()
    };
}

app.get("/", (req, res) => {
    res.json({ message: "Welcome to System Info API" });
});

app.get("/api/system-info", (req, res) => {
    res.json(getSystemInfo());
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
