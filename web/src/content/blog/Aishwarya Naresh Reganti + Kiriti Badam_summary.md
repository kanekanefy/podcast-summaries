---
title: "Aishwarya Naresh Reganti + Kiriti Badam"
description: "：Aishwarya Naresh Reganti（前 Alexa/Microsoft AI 研究员）和 Kiriti Badam（OpenAI Codex 工程师）是一对夫妻档 AI 产品专家，他们在 Maven 上开设了关于构建企业级 AI 产品的热门课程。"
pubDate: "2026-01-15"
guest: "Aishwarya Naresh Reganti + Kiriti Badam"
---

# Podcast Summary: Aishwarya Naresh Reganti + Kiriti Badam on Lenny's Podcast

**嘉宾简介**：Aishwarya Naresh Reganti（前 Alexa/Microsoft AI 研究员）和 Kiriti Badam（OpenAI Codex 工程师）是一对夫妻档 AI 产品专家，他们在 Maven 上开设了关于构建企业级 AI 产品的热门课程。

## 1. 核心议题 (The Questions)
- **AI 产品的本质差异**：为什么说构建 AI 产品与传统软件开发（如 Booking.com）有着根本的不同？
- **代理与控制的权衡**：如何设计一条安全的路径，从简单的 Copilot 进化到完全自主的 AI Agent？
- **Evals（评估）的真相**：Evals 到底是万能药还是被过度炒作？它与生产监控（Production Monitoring）有什么区别？
- **领导者的适应性**：在 AI 时代，非技术背景的产品领导者如何重建自己的直觉？

## 2. 核心洞察 (Core Conclusions)
- **非确定性 (Non-Determinism) 是核心挑战**：
    - 传统软件是确定性的（输入 A -> 流程 B -> 输出 C）。AI 产品在**输入端**（用户可以用无数种方式表达意图）和**输出端**（LLM 是概率模型）都是非确定性的。**你不再是编写规则，而是在校准行为。**
- **代理权与控制权的权衡 (The Agency-Control Trade-off)**：
    - 你赋予 AI 的代理权（Agency/Autonomy）越高，人类拥有的控制权（Control）就越低。**不要一开始就追求全自动 Agent。** 必须在低风险环境中通过“人机协同”积累信任数据，再逐步放权。
- **CCCD 框架 (Continuous Calibration, Continuous Development)**：
    - 这是一个致敬 CI/CD 的概念。AI 产品不仅需要持续开发（Dev），更需要**持续校准（Calibration）**。因为模型会变（如 GPT-4o 到 GPT-5），用户行为会变，你需要不断根据新出现的模式调整系统。

## 3. 心法与原则 (Repeatedly Emphasized Points)
- **痛苦即护城河 (Pain is the New Moat)**：
    - 如今构建一个 Demo 极其便宜。真正的壁垒在于**解决具体业务流程中那些肮脏、复杂、痛苦的边缘情况**。那些愿意深入泥潭去清洗数据、梳理混乱分类法的公司，才能建立护城河。
- **问题优先 (Problem First)**：
    - 警惕“多智能体系统”（Multi-Agent Systems）的炒作。不要为了用新技术而把简单问题复杂化。**始终专注于你要解决的用户问题，而不是你使用的工具复杂度。**

## 4. 实战手册 (Specific Cases & Methodologies)
- **AI 产品的“三步走”进化论**：
    1.  **路由/助手 (Router/Copilot)**：AI 仅负责分类或起草回复，人类必须审核。**目标**：收集人类修正数据，建立“黄金数据集”。
    2.  **经理 (Manager)**：AI 执行多步操作，但在关键节点需人类批准。
    3.  **代理 (Agent)**：AI 全自动解决问题。**条件**：只有在第1、2步的数据证明其可靠性后才能进入此阶段。
- **Evals vs. 监控**：
    - **Evals（评估）**：用于捕捉**已知的错误模式**（Known Unknowns），防止回归。
    - **生产监控（Monitoring）**：用于发现**未知的涌现行为**（Unknown Unknowns）。例如用户频繁点击“重新生成”，这是一个隐形的不满信号，Evals 测不出来，只能靠监控。
- **领导者的“Vibe Coding”**：
    - 以前的直觉已经失效。高管需要亲自上手（Hands-on）。比如 Rackspace 的 CEO 每天凌晨 4-6 点专门学习 AI 或写代码。**你必须亲自体验这种“概率性软件”的脾气，才能做出正确的战略决策。**

## 5. 反常识视角 (Counter-intuitive Points)
- **“一键生成 Agent”是骗局**：
    - 任何承诺“一键接入你的企业数据并自动工作”的产品都是营销噱头。企业数据极其混乱（例如：鞋子分类下同时有“男鞋”和“For Men”两个死节点）。**真正的落地需要 4-6 个月的脏活累活来清理数据层。**
- **不要迷信基准测试 (Benchmarks)**：
    - 客户经常说“我看这个模型在排行榜上分很高”。那是通用能力的测试，与你的垂直场景（如保险承保）毫无关系。**你必须建立自己的业务评估集。**

## 6. 花絮与细节 (Interesting Details)
- **夫妻档**：Aishwarya 和 Kiriti 实际上是结婚四年的夫妻，他们在节目最后甜蜜互夸（Kiriti 称赞妻子能把复杂概念讲得极简单）。
- **Whisper Flow**：他们强烈推荐的工具，支持“概念性转录”（比如你说“加三个感叹号”，它会直接打出“!!!”而不是文字）。
- **科幻推荐**：两人都是《三体》（The Three-Body Problem）的粉丝，认为其关于基础科学停滞的隐喻对 AI 发展很有以此。
