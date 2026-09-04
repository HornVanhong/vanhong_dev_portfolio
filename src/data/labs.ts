import type { LucideIcon } from "lucide-react";
import {
  Radar,
  Activity,
  Globe2,
  Bug,
  Search,
  Terminal,
} from "lucide-react";

export type SecurityLab = {
  title: string;
  icon: LucideIcon;
  objective: string;
  tools: string[];
  whatIDid: string;
  result: string;
};

export const securityLabs: SecurityLab[] = [
  {
    title: "Network Scanning",
    icon: Radar,
    objective: "Map live hosts, open ports, and running services on a lab network.",
    tools: ["Nmap", "Kali Linux"],
    whatIDid:
      "Performed host discovery and service/version scans across a segmented lab subnet, then enumerated open ports for follow-up analysis.",
    result: "Produced a full network inventory and identified unnecessary exposed services.",
  },
  {
    title: "Packet Analysis",
    icon: Activity,
    objective: "Inspect live and captured traffic to understand protocol behavior and spot anomalies.",
    tools: ["Wireshark"],
    whatIDid:
      "Captured traffic during simulated normal and malicious activity, then filtered and analyzed packets to trace connections and payloads.",
    result: "Identified plaintext credential transmission and documented a mitigation recommendation.",
  },
  {
    title: "Web Security Testing",
    icon: Globe2,
    objective: "Assess a web application for common vulnerabilities in a controlled environment.",
    tools: ["Burp Suite", "OWASP Top 10"],
    whatIDid:
      "Intercepted and manipulated HTTP requests, tested input validation, and probed authentication and session handling.",
    result: "Found and documented multiple injection and access-control issues with proposed fixes.",
  },
  {
    title: "OWASP Juice Shop",
    icon: Bug,
    objective: "Practice exploiting a deliberately vulnerable application end-to-end.",
    tools: ["Docker", "Burp Suite", "OWASP Juice Shop"],
    whatIDid:
      "Deployed the vulnerable app in an isolated Docker container and worked through challenges spanning injection, broken auth, and XSS.",
    result: "Completed a broad set of challenges and mapped each to the relevant OWASP Top 10 category.",
  },
  {
    title: "Burp Suite Labs",
    icon: Search,
    objective: "Sharpen manual web exploitation techniques using guided vulnerable labs.",
    tools: ["Burp Suite", "PortSwigger Web Security Academy"],
    whatIDid:
      "Worked through labs covering SQL injection, XSS, CSRF, and access control using Burp's Proxy, Repeater, and Intruder tools.",
    result: "Built a repeatable manual testing workflow for future assessments.",
  },
  {
    title: "Linux Security & Hardening",
    icon: Terminal,
    objective: "Strengthen a Linux system against common attack vectors.",
    tools: ["Kali Linux", "Ubuntu Server", "iptables"],
    whatIDid:
      "Configured firewall rules, disabled unused services, enforced SSH key-based auth, and reviewed system logs for anomalies.",
    result: "Reduced the system's attack surface and established a baseline hardening checklist.",
  },
];
