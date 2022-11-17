import { launchAsync } from "@microsoft/immersive-reader-sdk"

export default function Home() {
    return (
        <div>
            <button onClick={() => launchAsync("token", "immersivereader-ne", { chunks: [{ content: 'Hello world' }] })}>
                Launch reader
            </button>
        </div>
    )
}
