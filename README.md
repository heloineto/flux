<div align="center">

# Flux

**A framework for building conversational bots.**

Build, visualize, and manage conversational flows across multiple channels — with a visual editor that non-technical team members can use too.

</div>

---

## Why Flux?

Building conversational bots involves solving the same hard problems over and over: handling user input edge cases, managing conversation state, supporting multiple channels, letting non-developers make changes. Flux solves all of this in one framework.

- **Multi-channel** — A single interface to integrate with WhatsApp, Telegram, Instagram, and more
- **Visual & code-first** — An intuitive drag-and-drop editor that is fully interchangeable with code
- **Accessible to everyone** — Non-technical team members can configure messages, business hours, and flows without touching code
- **Built-in i18n** — First-class support for multiple languages

## Features

### Smart Input Handling

Flux handles user replies intelligently out of the box:

- **Choice messages** with built-in normalization — case insensitive, accent/special character removal, trimming, alias support, and smart matching with sane defaults
- **Custom validation** with attempt tracking, so you always know how many retries the user has made
- **Invalid response handling** with configurable max retries — after N failed attempts, redirect the user automatically
- **Reply timeout** detection — handle users who go silent
- **Contextual replies** — when a user replies to a previous choice message in the conversation, Flux rewinds the flow and continues as if the intermediate messages didn't happen

### Conversation Management

- **Human handoff** — seamlessly transfer conversations from the bot to a human attendant
- **Offboarding** — attendants can pass conversations back to the bot to finalize them
- **Business hours** — built-in scheduling so the bot behaves differently outside working hours
- **Commands** — keywords the user can send to interrupt the normal flow and jump to another state
- **Contact blocking**
- **Waiting queue alerts** — automatically message contacts who have been waiting too long
- **Graceful updates** — when the bot is updated and conversation state can't be recovered, restart gracefully
- **Middleware support**

### Visual Flow Editor

A multi-file visual editor for drawing conversational flows, inspired by tools like Stately and Figma:

- **Multi-file support** — organize complex bots across multiple files
- **Figma-like sidebar** for navigating the flow structure
- **Auto layout** — automatically organize your diagrams
- **State machine branching** with git-like mental model
- **Actually good search** — fuzzy search across group names and messages, VS Code-style UI with case-sensitive and exact word matching, jump to matches, and find-and-replace

### Static Analysis

Catch problems before they reach users:

- **Infinite loop detection** — flag loops that lack user input
- **Dead code detection** — find unreachable states in the state machine

### Admin Dashboard

A real-time dashboard for managing contacts, conversations, and operations:

- View all contacts and conversations in real time (with full history)
- Browse all messages
- Export conversations to PDF
- **Batch operations** — reset user/conversation state, send messages to multiple contacts, end conversations in bulk

### Testing Suite

A visual, integrated testing environment:

- Test freely in a WhatsApp-like chat interface
- Build automated test scenarios
- Inspect conversation state and user state at any point
- View logs and tracking events inline

### Analytics & Tracking

- **Auto-captured tracking events** — every branch point (if/choice) automatically records the percentage of contacts that reach each path
- **Unresponsive bot detection** — know when the bot failed to answer a user

### Developer Experience

- **CLI** to scaffold new projects (`npm create flux-app`)
- **Easy environments** — production, staging, homolog, and custom branches
- **Easy rollbacks** with built-in versioning
- **Pre-built activities** — common conversational patterns ready to use
- **Custom prompts** — create your own prompt types with custom code, colors, and icons

### Ecosystem

- **Community** — a curated space (like Figma Community) to discover high-quality bots, templates, and snippets, plus plugins
- **Package Registry** — a semver-based registry for reliable, updatable bot packages

## Concepts

| Term | Definition |
|---|---|
| **Bot** | The automated conversational agent that handles user interactions |
| **Contact** | The human user interacting with the bot |
| **Attendant** | The human who works alongside the bot, usually taking over conversations via handoff |
| **Human Handoff** | The process of transferring a conversation from the bot to a human attendant |
| **Activity** | A message or action within a conversational flow |
| **State** | A point in the conversation flow that the contact is currently at |
| **Group** | A collection of related states within the flow |
| **Command** | A keyword the user can send to interrupt the normal flow and jump to another state |

## Prompts

Prompts define the messages the bot sends and the expected user responses:

```
message
  body        — The message content
  footer      — Optional footer text
  choices     — A list of valid reply options
```

> In most channels, the user can still type free text even when choices are presented. Flux handles this as invalid input automatically.

A **retry** message can be configured for when validation fails. If omitted, the original message is resent.

## License

MIT
