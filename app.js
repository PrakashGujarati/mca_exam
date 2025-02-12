const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Function to detect environment
function detectEnvironment() {
    const envInfo = {
        isDocker: false,
        isHerokuDyno: false,
        isAWSLambda: false,
        isKubernetes: false,
        isCloudVM: false
    };

    // 🔹 Check for Docker
    if (fs.existsSync("/.dockerenv")) {
        envInfo.isDocker = true;
    } else if (
        fs.existsSync("/proc/self/cgroup") &&
        fs.readFileSync("/proc/self/cgroup", "utf8").includes("docker")
    ) {
        envInfo.isDocker = true;
    }

    // 🔹 Check for Heroku Dyno (Environment Variables)
    if (process.env.DYNO) {
        envInfo.isHerokuDyno = true;
    }

    // 🔹 Check for AWS Lambda (AWS-Specific Environment Variables)
    if (process.env.AWS_LAMBDA_FUNCTION_NAME) {
        envInfo.isAWSLambda = true;
    }

    // 🔹 Check for Kubernetes (K8s) Environment
    if (fs.existsSync("/var/run/secrets/kubernetes.io/serviceaccount")) {
        envInfo.isKubernetes = true;
    }

    // 🔹 Check for Cloud VM (AWS EC2, Google Cloud, Azure)
    const cloudInstanceFiles = [
        "/sys/class/dmi/id/product_uuid", // AWS, GCP, Azure may have this
        "/var/lib/cloud/instance" // Common in cloud-init based instances
    ];
    envInfo.isCloudVM = cloudInstanceFiles.some(file => fs.existsSync(file));

    return envInfo;
}

// Welcome route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Environment Detection API" });
});

// Environment detection API
app.get("/api/detect", (req, res) => {
    res.json(detectEnvironment());
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
