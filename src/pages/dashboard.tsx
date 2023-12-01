"use client";

import { useSearchParams } from "next/navigation";
import {
  DeployedServerDashboard,
  Header,
  Footer,
  StickyLabel,
  ServerUrl,
} from "@/components";
import { WSS_PROJECT_URI } from "@/utils/constants";
import { useEffect, useState } from "react";

import "../app/globals.css";

export default function Dashboard() {
  const searchParams = useSearchParams();
  const username = searchParams?.get("username") || "";
  const project = searchParams?.get("project") || "";
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (username && project) {
      setUrl(
        WSS_PROJECT_URI.replace("__USERNAME__", username).replace(
          "__PROJECT__",
          project
        )
      );
    }
  }, [username, project]);

  useEffect(() => {
    // Set up the Tally configuration
    window.TallyConfig = {
      formId: "mKVWqK",
      popup: {
        emoji: {
          text: "👋",
          animation: "wave",
        },
      },
    };

    // Dynamically load the Tally script
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-[1vh] p-[0.1rem]">
      <StickyLabel />
      <main className="p-10">
        <Header showSampleProject={false} />
        {url ? <ServerUrl url={url} /> : null}
        {url && username && project && (
          <DeployedServerDashboard
            url={url}
            username={username}
            project={project}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
