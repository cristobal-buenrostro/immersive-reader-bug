import { launchAsync } from "@microsoft/immersive-reader-sdk"

export default function ImmerisveReader() {
    return (
            <button onClick={() => launchAsync("token", 
            "subdomain", { chunks: [{ content: 'Hello world' }] })}>
                Launch reader
            </button>
    )
}
