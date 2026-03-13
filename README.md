<div align="center">

# Flux

**A platform for building conversational AI agents.**

Design, deploy, and manage AI agents that handle conversations across multiple channels - with a visual workflow editor anyone on your team can use.

</div>

---

## Why Flux?

Building conversational AI agents involves solving the same hard problems over and over: handling user input edge cases, managing conversation state, supporting multiple channels, letting non-developers make changes. Flux is a platform that solves all of this in one place.

- **Multi-channel** - A single interface to deploy agents on WhatsApp, Telegram, Instagram, and more
- **Visual & code-first** - An intuitive drag-and-drop workflow editor, fully interchangeable with code
- **Accessible to everyone** - Non-technical team members can configure messages, business hours, and flows without touching code
- **AI-native** - LLM nodes are first-class citizens in every workflow

## Features

### Smart Input Handling

Agents handle user replies intelligently out of the box:

- **Choice messages** with built-in normalization - case insensitive, accent/special character removal, trimming, alias support, and smart matching
- **Custom validation** with attempt tracking, so you always know how many retries the user has made
- **Invalid response handling** with configurable max retries - after N failed attempts, redirect the user automatically
- **Reply timeout** detection - handle users who go silent
- **Contextual replies** - when a user replies to a previous choice message, Flux rewinds the flow and continues as if the intermediate messages didn't happen

### Conversation Management

- **Human handoff** - seamlessly transfer conversations from the agent to a human attendant
- **Offboarding** - attendants can pass conversations back to the agent to finalize them
- **Business hours** - built-in scheduling so the agent behaves differently outside working hours
- **Commands** - keywords the user can send to interrupt the normal flow and jump to another state
- **Contact blocking**
- **Waiting queue alerts** - automatically message contacts who have been waiting too long
- **Graceful updates** - when a flow is updated and conversation state can't be recovered, restart gracefully
- **Middleware support**

### Visual Workflow Editor

A multi-file visual editor for building conversational flows, inspired by tools like Stately and Figma:

- **Multi-file support** - organize complex agents across multiple files
- **Figma-like sidebar** for navigating the flow structure
- **Auto layout** - automatically organize your diagrams
- **State machine branching** with git-like mental model
- **Actually good search** - fuzzy search across group names and messages, VS Code-style UI with case-sensitive and exact word matching, jump to matches, and find-and-replace

### Static Analysis

Catch problems before they reach users:

- **Infinite loop detection** - flag loops that lack user input
- **Dead code detection** - find unreachable states in the state machine

### Admin Dashboard

A real-time dashboard for managing contacts, conversations, and operations:

- View all contacts and conversations in real time (with full history)
- Browse all messages
- Export conversations to PDF
- **Batch operations** - reset user/conversation state, send messages to multiple contacts, end conversations in bulk

### Testing Suite

A visual, integrated testing environment:

- Test freely in a WhatsApp-like chat interface
- Build automated test scenarios
- Inspect conversation state and user state at any point
- View logs and tracking events inline

### Analytics & Tracking

- **Auto-captured tracking events** - every branch point (if/choice) automatically records the percentage of contacts that reach each path
- **Unresponsive agent detection** - know when the agent failed to answer a user

### Developer Experience

- **CLI** to scaffold new projects (`npm create flux-app`)
- **Easy environments** - production, staging, homolog, and custom branches
- **Easy rollbacks** with built-in versioning
- **Pre-built steps** - common conversational patterns ready to use
- **Custom nodes** - create your own node types with custom code, colors, and icons

### Ecosystem

- **Community** - a curated space (like Figma Community) to discover high-quality agents, templates, and snippets, plus plugins
- **Package Registry** - a semver-based registry for reliable, updatable flow packages

## Concepts

| Term | Definition |
|---|---|
| **Flow** | An AI agent definition - the workflow graph that drives a conversation. "Flow" is the internal name used in code, routes, and APIs |
| **Agent** | What flows are called in marketing and user-facing surfaces |
| **Contact** | The end user interacting with the agent |
| **Attendant** | The human operator who works alongside the agent, typically taking over conversations via handoff |
| **Human Handoff** | The process of transferring a conversation from the agent to a human attendant |
| **Step** | A single node/action within a flow (send message, ask question, branch, etc.) |
| **State** | The point in a flow that a contact is currently at |
| **Group** | A collection of related states within the flow |
| **Command** | A keyword the user can send to interrupt the normal flow and jump to another state |

## Nodes

Nodes are the building blocks of a flow:

```
send message  - emit text/media to the contact
ask question  - wait for a reply, store the answer
branch        - conditional transition based on context
AI response   - call an LLM, transition on result
webhook       - HTTP call with request/response mapping
set variable  - assign a value to flow context
jump          - go to another state or flow
```

> In most channels, the user can still type free text even when choices are presented. Flux handles this as invalid input automatically.

A **retry** node can be configured for when validation fails. If omitted, the original message is resent.

## License

MIT
