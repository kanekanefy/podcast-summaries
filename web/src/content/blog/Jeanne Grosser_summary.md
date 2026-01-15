---
title: "Jeanne Grosser - 播客摘要"
description: "## 1. 核心议题 (The Questions)"
pubDate: "2026-01-15"
guest: "Jeanne Grosser"
---

# Jeanne Grosser - 播客摘要

**嘉宾简介**: Jeanne Grosser - Stripe早期销售团队建设者，现任Vercel COO（负责营销/销售/客户成功），前Google产品经理，20年销售和GTM（Go-to-Market）专家

## 1. 核心议题 (The Questions)
- 什么是Go-to-Market（GTM）？为什么它从sales/marketing扩展到全客户生命周期？
- **GTM Engineer新兴角色**：如何用AI Agent将10个SDR的工作压缩到1人+机器？
- 如何构建"让工程师感觉不到是销售组织"的销售团队？
- Segmentation框架：如何用XY轴模型切割市场并优化销售策略？
- PLG（Product-Led Growth）的极限：为什么"几乎每个千亿公司都需要sales团队"？
- 定价策略：将pricing视为产品，而非财务决策

## 2. 核心洞察 (Core Conclusions)
- **GTM定义演变**: 从"tip of spear (sales/marketing)"到"任何touch customer or make a dollar的职能"（包括客户成功/支持/合作伙伴）
- **GTM Engineer的崛起**: AI Agent可以将10人SDR团队缩减到1人QA，6周开发周期，$1000年运行成本 vs $1M+薪资成本
- **"10分钟测试"**: 销售人员放在10个工程师面前，10分钟内应该无法分辨他不是PM - 产品深度的litmus test
- **消费模式转移**: 从transactional到consultative，特别是AI时代"帮助客户思考what they need to change"
- **80%客户购买动机**: "Buy to avoid pain or reduce risk" vs "increase upside"（风险规避 > 机会追求）

## 3. 心法与原则
- **GTM即产品化**: 将客户购买旅程设计成"unique experiences"而非transactional encounters
- **增加价值在每个触点**: 即使客户不买，也提供洞察（如网站性能benchmark）
- **构建R&D引擎**: 销售团队应该是产品管理的延伸（20人销售团队 = 众多customer conversations）
- **语言精确性**: Amazon PRFAQ禁止"great"等模糊词，迫使clarity of thought
- **长期复利投资**: "We'll never regret making latency faster" - 持续优化基础设施

## 4. 实战手册

### GTM Engineer角色与AI Agent
- **项目Roslund (2017尝试 → 现在成功)**:
  - 2017: AI false positive rate太高，失败
  - 现在: AI Agent可以生成personalized outreach
- **Lead Agent案例**:
  - 开发: 1个GTM Engineer 25-30%时间，6周
  - 成本: $1000/年 vs 10人SDR团队$1M+/年
  - 效果: Lead-to-opportunity conversion rate持平，touch数减少（更快响应）
  - 运行: 1人QA agent + 9人转移到outbound
- **Human-in-the-loop**: Agent生成内容，human审核发送
- **应用扩展**: Inbound → Outbound (SMB) → Install-based sales，但deep enterprise仍需人类研究

### 构建工程友好型销售团队
- **产品深度要求**:
  - 理解technical differentiation和business model impact
  - 区分objection handling vs market opportunity
  - 知道when to say no（think like GM）
- **Litmus测试**: "Put an AE in front of 10 engineers, should take 10 minutes to figure out they aren't a PM"
- **双重身份**: Revenue driving + R&D（产品反馈到roadmap）
- **招聘profile**:
  - 优先: Sales Engineers (前端开发者转型销售)
  - 补充: Consulting/banking背景（quantitative/consultative能力）
  - 避免: 纯sales background（缺乏产品思维）

### Segmentation框架 - XY轴模型
- **传统单维度不足**: Small/Medium/Large太粗糙
- **Stripe案例**:
  - X轴: Size (SMB/Mid-market/Enterprise)
  - Y轴1: Growth potential (200% YoY vs 8% - consumption business重点)
  - Y轴2: Business Model (B2B/B2C/B2B2B platform/B2B2C marketplace)
    - B2B → Business payments + ACH/wires + Billing
    - B2C → Consumer payments + Apple Pay
    - Platform/Marketplace → Connect product
- **Vercel案例**:
  - X轴: Size
  - Y轴1: Traffic (Crux rank - Chrome数据)
    - 例子: OpenAI 3000 employees但top 25 traffic site → 归类Enterprise
  - Y轴2: Workload type (E-commerce vs Crypto vs SaaS)
- **实施步骤**:
  - 与Data Science合作: "What drives revenue?"
  - 分析成功案例: "Where are we winning repeatedly?"
  - 数据驱动: Crux rank（流量）→ revenue correlation

### Go-to-Market即产品化
- **Stripe白板会议实践**:
  - 第一call不是discovery问答，而是whiteboarding session
  - 客户绘制payments架构图
  - 双赢: 销售了解stack/competition，客户获得mental model asset
- **价值加法原则**: "Adding value at any touch point regardless of whether they buy"
  - 例子: 提供网站性能benchmark + peer comparison
  - 长期价值: 不买的客户可能3-5年后回来
- **体验设计**: "Transactional, flat, boring vs human, personalized, unique"

### 工具栈与AI应用
- **Gong + Agent**:
  - Lost opportunity review: Agent分析所有交互（Slack/email/calls）
  - 案例: AE说"lost on price"，Agent发现"never got to economic buyer" + "ROI mass未被接受"
  - Deal-bot实时Slack反馈: "You haven't talked to an economic buyer yet"
  - Enablement诊断: 找出objection handling gaps
- **Build vs Buy重新评估**:
  - Lead Agent: 6周，1个工程师25-30%时间，$1000/year
  - Lost Bot: 2天开发
  - 启示: "Not that hard to build these agents"

### 定价作为产品
- **Stripe Billing错误**: 最初Freemium策略，后发现integration需要努力 → kill freemium，零负面影响
- **Vercel定价改革**:
  - 原问题: Consumption-based business bundled成SaaS-like pricing
  - 企业版$299中50%是startups → 拆分成Enterprise + Pro
  - 结果: PLG funnel增长（startups可以self-serve购买features）
- **定价哲学**: "Pricing like a product" - 理解客户value perception + cost structure，align二者

## 5. 反常识视角
- **PLG的极限**: "People are generally not going to give you $1M via self-serve flow"
- **销售招聘profile**: 优先考虑SE背景（前端开发者转型）而非纯sales
- **80/20法则**: 80%客户为了避免pain，20%为了追求upside（但startup founders喜欢讲upside）
- **公司化时机**: $1M ARR是招聘第一个销售的合适时机（而非更早）
- **Founder-led销售陷阱**: Founder是incredible salespeople但需要handover + 保持connection
- **过度专业化趋势**: 17个GTM角色将开始collapse（hyper-specialization → integrated lifecycle）

### Stripe vs Vercel GTM经验
- **Stripe优势**: 天然customer zero（AI cloud）
- **共同挑战**: Outbound确定性低于inbound，SMB更容易AI化
- **企业sales**: Agent可以做research，但不太可能full automation

## 6. 花絮与细节

### 个人背景
- Gmail launch (April 1, 2004) 后两个月加入（June 1, 2004）
- 20+年tech职业，目睹软件commoditization
- 跳槽历史: Google → Stripe (9年) → Vercel (COO)

### 学习经历
- **最大影响公司**: Amazon（虽然仅1年），因为"blend between product and business thinking"
- **AWS收购观察**: Whole Foods acquisition时的strategic clarity
- **Leadership principles**: "Are you right a lot" (Vocally self-critical)

### 推荐与观点
- **会议参与**: Claire Hughes-Johnson, Kate Jensen, James Ditt贡献话题
- **销售补偿**: 挣扎于12个月提前设定，希望flexibility to pivot
- **多元化组合**: Sales experience + consulting/banking background的learning environment
- **职业建议**: CEO应stay connected to customers（持续R&D需求）

### 个人特质
- **大学跳水经历**: "Precision sport + repetitive"，失败后立即"get back on the diving board"
- **座右铭**: "When the going gets tough, the tough get going" (妈妈的话)
- **另一句话**: "Where there's a will, there's a way"

### 趣事细节
- **项目命名**: Roslund (发现A-DNA的科学家)
- **Deal Bot命名迭代**: Lost Bot → Deal Bot
- **GTM Engineer前3个**: 原本是Vercel sales engineers（都是前端开发者）
- **Growth Operations**: 新角色填补growth/marketing/product gap
