---
title: "Jeff Weinstein"
description: ": Jeff Weinstein - Stripe产品负责人（支付基础设施/Atlas），6年帮助将Stripe支付扩展到数千亿美元年交易量，0-to-1产品专家，客户洞察狂热者"
pubDate: "2026-01-15"
guest: "Jeff Weinstein"
---

# Jeff Weinstein - 播客摘要

**嘉宾简介**: Jeff Weinstein - Stripe产品负责人（支付基础设施/Atlas），6年帮助将Stripe支付扩展到数千亿美元年交易量，0-to-1产品专家，客户洞察狂热者

## 1. 核心议题 (The Questions)
- 如何通过直接customer conversations发现真正需要解决的问题？
- **Go-go-go ASAP + 乐观主义 + 长期复利**的产品哲学
- Craft obsession（工艺执着）vs Product Market Fit的关系 - "Craft is a dessert"
- Metrics selection: "Companies with zero support tickets"如何驱动Atlas从15%→85%成功率
- **Study Groups**: Stripe的empathy训练项目（假装成公司练习客户同理心）
- Paying vs "Willing to pay"的本质区别 - 为什么愿意支付≠真正支付

## 2. 核心洞察 (Core Conclusions)
- **速度是核心竞争力**: "Leave a meeting to just get one message back" - 客户feedback的P-zero alert级别
- **静默的力量**: 创造silence让客户open their heart，而非pitch你的产品
- **坏日子度量**: "Users having a bad day" chart - emit log line当用户遇到问题
- **朋友反馈陷阱**: "We discount all feedback from our friends to zero" - 朋友不是真实客户
- **真正的承诺**: "Ready to pay is significantly different than paying" - 要求他们真的wire $1M or send $1 invoice
- **Craft定位**: "Craft is a dessert you get after the meal of does your thing solve a real problem"

## 3. 心法与原则
- **Go-go-go ASAP**: 注射energy，"make it due tomorrow rather than next week"
- **长期复利**: 投资永远不会后悔的基础设施（API latency, 83(b) reliability）
- **平衡两者**: Mix instinct of "let's get it done today" with "where are we going?"
- **同理心训练**: Study groups假装公司，role-play客户问题，不提供solution
- **产品经理责任**: "Produce product market fit" - charts going up + tweets
- **客户视角指标**: Metric should be something customer would be ecstatic to learn you're measuring

## 4. 实战手册

### Customer Conversation技巧
- **静默实践**:
  - 不要pitch: "Hi, I'm the CEO of X, Y, Z company" - 错失机会
  - 提问启发: "What's in your email?" "What would you be working on if not talking to me?" "Magic wand: what do you wish you could offload?"
  - 沉默等待: Let them spill their biggest problem
- **Speed原则**:
  - "I will leave a meeting to just get one message back"
  - 即使"Hey, I got this. I'm about to go to dinner. Can I hit you up tomorrow?"也有效
  - 目标: Turn detractor into promoter
- **深度筛选**:
  - "Do you mind sending me 3-5 bullet points about the details?" (自我选择机制)
  - 创造arbitrary programs: "Bug finder program - videos for next 3 days"
- **Twitter/email公开**: 分享email address，直接text messaging关系

### Metrics选型与运营
- **Atlas成功案例**: "Companies with zero support tickets"
  - 从15%→85% (18个月)
  - Definition: 申请开始→政府等待→IRS等待→额外2周缓冲，全程无support tickets
  - 反直觉: 不是average而是percentage达标
  - Motivation: 工程师获得ownership，直接reply support tickets了解问题
- **战术指标**: Risk review timeline
  - Metric: "Cohort customers getting final risk decision within X days"
  - Chart: Up and to the left (optimization function)
  - Result: 100% get decision within 1 hour (from long tail)
- **Bad Day Chart**:
  - Emit log line when user has problem (404, payout late, >10 declines)
  - Stacked bar chart显示frequencies
  - 价值: "I see the URL to those charts" - 预测问题优先级
- **Metrics命名**: 简洁有力 - "Companies with zero support" vs "Number of companies that do not send a support ticket over X period"
- **Dashboard hygiene**:
  - 百分比不显示41 significant digits（2位足够）
  - 所有charts同一X-axis
  - 增加team查看dashboard的频率

### Study Groups - 客户同理心训练
- **规则1**: "You do not work at Stripe"
- **规则2**: "We're not here to solve problems" (practice empathy only)
- **流程**: 4-8人pretend to be company with outcome problem
- **价值**: 训练team在pitch前先理解问题
- **扩展**: 可以用于任何角色（engineering/PM等）

### Product Craft实践
- **Craft顺序**: 先PMF再craft - "No amount of craft will make people need it"
- **Past失败案例**: SQL分析工具公司，服务down 20分钟客户不愤怒→意识到缺乏PMF
- **当前标准**: People don't get out of bed for their second problem
- **Atlas案例**: 83(b) automation, signing service, click-based processes
- **Craft作为激励**: 工程师从support tickets获得product ideas

### Hiring Approach - Marketing/Sales/Product三角
- **Marketing**: 建立positive brand/reputation (LinkedIn, content sharing)
- **Sales**: 理解候选人动机 (engineer → world-class engineering org, crypto enthusiast)
- **Product**: 迭代JD，基于候选人mold角色而非固定职位描述
- **心态**: 不要用"recruiting"标签，用"people you're going to work with"

## 5. 反常识视角
- **Willingness to pay的谎言**: "Sign up for any payment service, send me an invoice for $1" - 实践收费vs理论承诺的巨大差异
- **朋友反馈零价值**: "We discount all feedback from our friends to zero" - 因为friends like you但不是你的target customer
- **Paying vs Ready的差异**: "Significantly different" - wire $1M vs say they'll pay $1M
- **Metrics误区**: 不是"users logged in"而是"users accomplished what they wanted"
- **Growth mode误区**: 即使大企业也可能P-zero alert level intense growth (Atlas 1/6 Delaware corporations)
- **Craft陷阱**: "No amount of craft can save something that people don't really need"

### Stripe Study Groups
- **目的**: Pretend to be company, practice empathy without solving
- **规模**: 4-8 total people
- **规则**: 不代表Stripe，不解决问题
- **成果**: 训练倾听和问题理解

## 6. 花絮与细节

### 教育背景
- Hippy-dippy K-12学校（Baltimore Maryland）
- History of Science课程: 研究曾被认为正确但后来错误的理论
- Ticket cost概念: 每节课学费除以小时数，上课时给老师ticket "if it was worth it"
- 转专业: English → Computer Science (发现tech leaders背景)
- 经济学micro课程: 和朋友学同样材料，朋友top grade，Jason bottom grade，professor建议drop，Jason拒绝

### Stripe经历
- **产品负责人**: Payment infrastructure teams
- **全球支付**: 从10 payment methods → 100+ (曲线：长期flat → nonlinear)
- **Atlas领导**: 1/6 Delaware corporations通过Stripe Atlas创立
- **Study Groups创始人**: Empathy训练项目

### 个人哲学
- **教育理念**: 在学费ticket上签字，选择是否值得
- **中学课程**: History of Science (1500s belief → 1600s different belief)
- **第一份工作**: SQL analyst，每次写query后需要同样后续分析

### 推荐与观点
- **测试收费**: "Send me $1 right now" practice for founders
- **Speed重要性**: "Reduce time between customer feeling compelled and response"
- **Bug finder program**: 创造arbitrary program来bounds effort
- **Metrics命名**: 简洁、情感化、"Companies with zero support"

### 趣事细节
- **$1 invoice练习**: 让founderpractice收费，获得logo on invoice的体验
- **Support ticket洞察**: 20分钟down时间客户不愤怒→意识到没有PMF信号
- **Atlas bug**: Shares vs 25% shares错误，创始人gracious，成为long-term friend
- **度量哲学**: "If we accidentally leaked our dashboard, customer would be ecstatic"
- **错误实验**: 20分钟服务down，客户不愤怒 → 意识到没有PMF

### Stripe Study Groups推广
- **邀请**: 其他公司可以steal这个idea
- **价值**: Practice empathy for customer
- **扩展**: 不仅sales，all roles
