export type CaseStudyCategory = "FinTech" | "AI Testing" | "Energy" | "Marketing";

export interface CaseStudy {
  slug: string;
  title: string;
  category: CaseStudyCategory;
  company: string;
  summary: string;
  highlights: string[];
  role: string;
  techStack: string[];
  links?: {
    demo?: string;
    repo?: string;
  };
  // Detailed content for case study pages
  headlineOutcome: string;
  keyMetrics: Array<{
    label: string;
    value: string;
  }>;
  context: string;
  problem: string;
  approach: string;
  implementation: string;
  testingStrategy: string;
  results: string;
  learnings: string;
}

export const caseStudies: CaseStudy[] = [
  // FinTech - Mastercard
  {
    slug: "mastercard-ui-testing-framework",
    title: "UI Testing Framework with Playwright",
    category: "FinTech",
    company: "Mastercard",
    summary:
      "Built a comprehensive Playwright-based UI testing framework in TypeScript that reduced escaped UI bugs by about one third over two releases.",
    highlights: [
      "Reduced UI-related production incidents by 35% over two quarters",
      "Cut manual regression time from days to a few hours",
      "Cross-browser coverage with stable selectors",
    ],
    role: "Senior QA Engineer / SDET",
    techStack: ["Playwright", "TypeScript", "Jenkins", "HTML Email Reporting"],
    headlineOutcome:
      "Reduced UI-related production incidents by 35% over two quarters",
    keyMetrics: [
      { label: "Production incidents reduction", value: "-35%" },
      { label: "Manual regression time", value: "Days → Hours" },
      { label: "Cross-browser coverage", value: "Chrome, Firefox, Safari, Edge" },
    ],
    context:
      "Mastercard's Anti-Money Laundering (AML) case management platform is a critical system used by investigators to review suspicious transactions. The platform handles complex workflows with multiple user roles, real-time updates, and integration with various data sources. As the platform evolved, manual regression testing became a bottleneck, and UI-related bugs were escaping to production.",
    problem:
      "The team faced several challenges: flaky tests due to unstable selectors, long manual regression cycles that delayed releases, lack of cross-browser coverage, and difficulty maintaining test data across environments. Production incidents related to UI bugs were impacting investigator productivity and confidence in the platform.",
    approach:
      "I designed and implemented a Playwright-based testing framework using Page Object Models (POM) for maintainability. The framework emphasized resilient selector strategies, combining data-testid attributes with semantic selectors. I created a test data management system that could seed and clean up test scenarios independently, ensuring tests could run in parallel without conflicts.",
    implementation:
      "The framework was built in TypeScript with Playwright, organized into reusable page objects that abstracted complex interactions. I integrated HTML email reporting that sent detailed test results to the team after each CI run, making failures immediately visible. Jenkins pipelines were configured to run the suite on every commit and before deployments. The framework supported multiple environments through configuration files, allowing the same tests to run against dev, test, staging, and pre-prod.",
    testingStrategy:
      "Tests were organized by feature areas and user workflows. I implemented a tagging system to run subsets of tests based on risk level and change scope. The framework included retry logic for known flaky scenarios and comprehensive logging for debugging. Cross-browser testing ran nightly, while critical path tests ran on every commit.",
    results:
      "Over two quarters, UI-related production incidents dropped by approximately 35%. Manual regression time was reduced from days to a few hours, as the automated suite covered most scenarios. The team gained confidence in releases, and developers could run the UI tests locally before committing. The framework became the foundation for all future UI testing work.",
    learnings:
      "This project reinforced the importance of investing in test infrastructure early. The Page Object Model pattern made tests resilient to minor UI changes, and the emphasis on stable selectors paid dividends as the application evolved. The HTML email reporting created visibility that helped prioritize fixes and track quality trends over time.",
  },
  {
    slug: "mastercard-backend-profiler-testing",
    title: "Backend Testing for Streaming and Batch Profilers",
    category: "FinTech",
    company: "Mastercard",
    summary:
      "Developed comprehensive test suites for transaction profiler pipelines using Python, Docker, and Testcontainers, improving confidence around new rule deployments.",
    highlights: [
      "Improved confidence around new rule deployments",
      "Detected subtle regression in streaming job before production",
      "Coverage of critical scenarios previously tested only manually",
    ],
    role: "Senior QA Engineer / SDET",
    techStack: ["Python", "Docker", "Testcontainers", "pytest"],
    headlineOutcome:
      "Detected subtle regression in streaming job before production deployment",
    keyMetrics: [
      { label: "Critical scenarios covered", value: "100+" },
      { label: "Test execution time", value: "< 5 minutes" },
      { label: "Pre-production bug detection", value: "Multiple" },
    ],
    context:
      "The AML platform includes profiler pipelines that evaluate transactions in real-time (streaming) and in nightly batches. These profilers apply complex rules to identify suspicious patterns, cross-border flows, and unusual transaction behaviors. The profilers are critical to the platform's core functionality, and bugs can result in false positives or missed suspicious activity.",
    problem:
      "Testing profiler pipelines was challenging because they depended on external services, databases, and message queues. Setting up realistic test environments required significant manual effort. Edge cases involving unusual transaction patterns were difficult to reproduce, and subtle regressions could slip through manual testing. The team needed a way to test profiler logic in isolation and validate end-to-end flows.",
    approach:
      "I built a testing framework using Python and pytest, leveraging Docker and Testcontainers to spin up realistic local stacks. The framework could start Kafka, databases, and mock services in isolated containers, run tests, and tear everything down. I created data seeding utilities that could generate test transactions with specific characteristics, making it easy to test edge cases.",
    implementation:
      "The test suite used Testcontainers to manage Docker containers for Kafka, PostgreSQL, and Redis. Each test could spin up a fresh environment, seed data, run the profiler logic, and validate results. I created fixtures for common scenarios like cross-border transactions, high-value transfers, and unusual patterns. The framework supported both streaming and batch profiler testing, with utilities to simulate message flows and validate outputs.",
    testingStrategy:
      "Tests were organized by profiler type and rule category. I implemented data-driven tests that could validate multiple scenarios from CSV files. Integration tests validated the full pipeline from message ingestion to rule evaluation to output storage. The suite ran in CI and could also be executed locally for development.",
    results:
      "The framework enabled comprehensive testing of profiler logic that was previously difficult to test. We caught a subtle regression in a streaming job before it hit production, preventing potential impact on investigators. The team gained confidence in deploying new rules, knowing that edge cases were covered. Critical scenarios that were previously tested only manually now had automated coverage.",
    learnings:
      "Testcontainers proved invaluable for creating realistic test environments without complex setup. The ability to spin up and tear down environments quickly enabled fast feedback loops. Data seeding utilities that could generate specific transaction patterns made it much easier to test edge cases that were hard to reproduce manually.",
  },
  {
    slug: "mastercard-postman-api-testing",
    title: "Postman API Test Suites with Jenkins and Kibana",
    category: "FinTech",
    company: "Mastercard",
    summary:
      "Created comprehensive Postman collections for multiple APIs with environment-specific configs, Jenkins integration, and Kibana dashboards for API health visibility.",
    highlights: [
      "Early detection of integration issues across environments",
      "Clear daily visibility of API health",
      "Reduced back and forth during incident analysis",
    ],
    role: "Senior QA Engineer / SDET",
    techStack: ["Postman", "Jenkins", "Kibana", "Newman"],
    headlineOutcome:
      "Early detection of integration issues with daily API health visibility",
    keyMetrics: [
      { label: "APIs covered", value: "15+" },
      { label: "Environments monitored", value: "4" },
      { label: "Daily test runs", value: "24/7" },
    ],
    context:
      "The AML platform exposes multiple REST APIs that are consumed by various internal and external systems. These APIs handle case management, transaction queries, user management, and reporting. API reliability is critical, as downstream systems depend on them for real-time operations.",
    problem:
      "API testing was fragmented across teams, with different tools and approaches. There was no centralized visibility into API health across environments. When incidents occurred, teams spent significant time determining whether issues were in the API layer or downstream consumers. Integration issues were often discovered late in the release cycle or after deployment.",
    approach:
      "I consolidated API testing into comprehensive Postman collections, organized by API domain. Each collection included environment-specific configurations for dev, test, staging, and pre-prod. I created reusable test scripts that validated response schemas, status codes, and business logic. Jenkins jobs were configured to run collections on schedule and on deploy, exporting results to Kibana for visualization.",
    implementation:
      "Postman collections were structured with clear naming conventions and organized by feature area. I used environment variables to manage configuration across environments, making it easy to run the same tests against different targets. Test scripts included assertions for response validation and data consistency checks. Newman CLI was used to run collections in CI/CD pipelines.",
    testingStrategy:
      "Collections ran on a schedule (hourly for critical APIs, daily for others) and triggered on every deployment. Test results were exported to Kibana, where dashboards provided visibility into API health trends, response times, and failure patterns. Email alerts were configured for critical failures, ensuring rapid response to issues.",
    results:
      "The centralized API testing approach enabled early detection of integration issues across environments. Daily visibility into API health helped teams identify trends and proactively address problems. When incidents occurred, the test results provided clear evidence of whether issues were in the API layer, reducing back-and-forth between teams during analysis. The approach became a model for other teams in the organization.",
    learnings:
      "Centralizing API testing in Postman with proper environment management made it easy for multiple team members to contribute and maintain tests. The integration with Kibana created visibility that helped prioritize work and track improvements over time. Scheduled test runs caught issues that might have been missed in manual testing or one-off checks.",
  },
  {
    slug: "mastercard-topicarchiver-pipeline-testing",
    title: "TopicArchiver and Data Pipeline Testing",
    category: "FinTech",
    company: "Mastercard",
    summary:
      "Built comprehensive test suites for Kafka-to-Parquet data pipeline validation, ensuring data integrity and schema consistency for historical data storage.",
    highlights: [
      "Increased trust in historical data",
      "Caught schema drift issues before downstream consumers broke",
      "Automated validation of nightly data loads",
    ],
    role: "Senior QA Engineer / SDET",
    techStack: ["pytest", "Kafka", "Parquet", "Azure Blob Storage"],
    headlineOutcome:
      "Caught schema drift issues before downstream consumers broke",
    keyMetrics: [
      { label: "Kafka topics monitored", value: "10+" },
      { label: "Parquet files validated", value: "Daily" },
      { label: "Schema validation checks", value: "Automated" },
    ],
    context:
      "The AML platform produces messages to Kafka topics whenever API actions occur (case creation, updates, status changes, etc.). TopicArchiver is a service that consumes from these topics and stores the data as Parquet files in Azure Blob Storage for historical analysis and compliance reporting. Data integrity is critical, as downstream systems rely on this historical data.",
    problem:
      "Validating that API actions resulted in correct Kafka messages was manual and error-prone. There was no automated way to verify that Parquet files were created correctly with valid schemas. Schema changes could break downstream consumers, but issues were often discovered late. The team needed confidence that historical data was accurate and complete.",
    approach:
      "I created a test framework that could validate the entire flow: API action → Kafka message → Parquet file. The framework used pytest with Kafka and Azure Blob Storage clients. Tests would trigger API actions, consume from Kafka topics to verify messages, and then validate Parquet files in blob storage. Schema validation ensured that Parquet files matched expected structures.",
    implementation:
      "The framework included utilities to produce and consume Kafka messages, read Parquet files from blob storage, and validate schemas. Tests were organized by API domain and message type. I created fixtures for common scenarios and data generators for edge cases. Jenkins jobs ran the suite on a schedule to validate nightly loads, with email reporting for failures.",
    testingStrategy:
      "Tests validated that each API action produced the expected Kafka message with correct payload structure. Parquet file validation checked file existence, schema consistency, and data integrity. Schema drift detection compared current schemas against expected schemas, alerting on changes. The suite ran nightly to validate data loads and could also be triggered manually for ad-hoc validation.",
    results:
      "The framework increased trust in historical data by providing automated validation of the entire pipeline. We caught schema drift issues before they broke downstream consumers, preventing production incidents. Automated validation of nightly loads gave the team confidence that data was being archived correctly. The approach became a model for testing other data pipelines in the organization.",
    learnings:
      "Testing data pipelines requires understanding the entire flow from source to destination. Validating intermediate steps (Kafka messages) and final outputs (Parquet files) provided comprehensive coverage. Schema validation was critical for catching breaking changes early. The nightly validation runs created a safety net that caught issues that might have been missed in manual checks.",
  },
  // AI Testing
  {
    slug: "syntea-university-ai-chat",
    title: "Syntea – University Student AI Chat and Learning Assistant",
    category: "AI Testing",
    company: "Syntea (IU)",
    summary:
      "Built comprehensive testing framework for LLM-powered student assistant, focusing on prompt evaluation, hallucination detection, and academic integrity guardrails.",
    highlights: [
      "Identified and reduced hallucinated answers in sensitive topics",
      "Created repeatable test harnesses for regression testing new model versions",
      "Improved confidence for academic team to roll out new features",
    ],
    role: "QA Engineer / AI Testing Specialist",
    techStack: ["Python", "OpenAI API", "pytest", "LangChain"],
    headlineOutcome:
      "Reduced hallucinated answers in sensitive academic topics",
    keyMetrics: [
      { label: "Hallucination detection rate", value: "95%+" },
      { label: "Test scenarios covered", value: "200+" },
      { label: "Model version regression tests", value: "Automated" },
    ],
    context:
      "Syntea is an AI assistant used by students at a German university (IU) to help with learning questions, study planning, and referencing course material. The assistant uses LLMs to provide contextual, helpful responses while maintaining academic integrity. The platform needed to ensure that AI responses were accurate, safe, and aligned with academic standards.",
    problem:
      "LLM responses could contain hallucinations, especially in sensitive academic topics. There was no systematic way to evaluate prompt changes or new model versions. Academic integrity was a concern—the assistant should help students learn but not provide full assignment solutions. The team needed confidence that new features and model updates wouldn't introduce regressions.",
    approach:
      "I created a comprehensive testing framework focused on LLM evaluation. The framework included prompt testing, hallucination detection through fact-checking against course materials, sentiment analysis to ensure appropriate tone, and academic integrity checks. I built synthetic datasets covering edge cases and difficult scenarios that were hard to test manually.",
    implementation:
      "The framework used Python with pytest, integrating with OpenAI's API for LLM interactions. Test cases included prompt variations, context scenarios, and expected response patterns. I implemented evaluation metrics for answer quality, relevance, and safety. The framework could run regression tests when new model versions were deployed, comparing outputs against baseline responses.",
    testingStrategy:
      "Tests were organized by topic area and use case. I created test scenarios covering common student questions, edge cases, and potential abuse cases. Hallucination detection compared AI responses against verified course material. Academic integrity tests ensured the assistant wouldn't provide complete solutions to assignments. The suite ran in CI and could be executed manually for ad-hoc evaluation.",
    results:
      "The framework identified and helped reduce hallucinated answers in sensitive topics. Repeatable test harnesses enabled the team to confidently evaluate new model versions and prompt changes. The academic team gained confidence to roll out new features, knowing that quality and safety were validated. The approach became a model for AI testing across the organization.",
    learnings:
      "Testing LLMs requires different approaches than traditional software testing. Evaluation metrics need to account for variability in responses while still catching regressions. Synthetic datasets are valuable for covering edge cases that are hard to test manually. Academic integrity guardrails require careful design to balance helpfulness with appropriate boundaries.",
  },
  {
    slug: "diabolocom-agent-assist",
    title: "Diabolocom – Agent Assist Platform",
    category: "AI Testing",
    company: "Diabolocom",
    summary:
      "Developed comprehensive testing framework for AI-powered agent assist features, including speech-to-text accuracy, summarization quality, and CRM integration flows.",
    highlights: [
      "Uncovered problematic scenarios where summaries missed key compliance details",
      "Built dashboards to track AI quality metrics over time",
      "Increased adoption of agent assist features by frontline teams",
    ],
    role: "Lead AI QA Engineer",
    techStack: ["Python", "Playwright", "Speech Recognition APIs", "pytest"],
    headlineOutcome:
      "Uncovered compliance gaps in AI summaries before production",
    keyMetrics: [
      { label: "Speech-to-text accuracy", value: "Tested across 10+ accents" },
      { label: "Summary quality scenarios", value: "100+" },
      { label: "CRM integration flows", value: "Full coverage" },
    ],
    context:
      "Diabolocom is a CCaaS (Contact Center as a Service) platform with AI agent assist features. The platform provides real-time transcription, summarization, and action recommendations to contact center agents during calls. The AI features are embedded in CRM systems and must work reliably across different accents, noise conditions, and call scenarios.",
    problem:
      "Speech-to-text accuracy varied significantly across accents and noise conditions. Summarization quality was inconsistent, sometimes missing critical compliance details. There was no systematic way to test agent assist flows embedded in CRM systems. The team needed confidence that AI features would work reliably in production across diverse scenarios.",
    approach:
      "I built a comprehensive testing framework that could replay anonymized call audio and compare outcomes. The framework tested speech-to-text accuracy across different accents and noise conditions, validated summarization quality against human-labeled samples, and tested agent assist flows in CRM integration scenarios. I created test harnesses that could simulate various call scenarios and validate AI outputs.",
    implementation:
      "The framework used Python with pytest, integrating with speech recognition APIs and CRM test environments. I created utilities to replay anonymized call audio and compare transcription accuracy. Summarization tests validated that key information was captured correctly, with special attention to compliance details. CRM integration tests used Playwright to validate agent assist flows in realistic scenarios.",
    testingStrategy:
      "Tests were organized by AI feature and scenario type. Speech-to-text tests covered multiple accents, noise levels, and call quality conditions. Summarization tests validated content quality, completeness, and compliance detail capture. CRM integration tests validated end-to-end flows from call start to action recommendations. The suite ran in CI and could be executed manually for specific scenarios.",
    results:
      "The framework uncovered problematic scenarios where summaries missed key compliance details, enabling fixes before production. Dashboards tracking AI quality metrics over time helped the team identify trends and prioritize improvements. Increased confidence in AI features led to higher adoption by frontline teams. The approach became a model for AI testing in contact center applications.",
    learnings:
      "Testing AI features in contact center applications requires realistic scenarios and diverse test data. Speech-to-text accuracy varies significantly across conditions, so comprehensive testing is essential. Summarization quality is critical for compliance, requiring careful validation. CRM integration testing ensures that AI features work correctly in real-world usage contexts.",
  },
  {
    slug: "diabolocom-quality-monitoring",
    title: "AI Quality Monitoring Platform",
    category: "AI Testing",
    company: "Diabolocom",
    summary:
      "Built testing framework for AI-driven quality monitoring that evaluates 100% of interactions, validating scoring models, KPI calculations, and multi-language consistency.",
    highlights: [
      "Reduced disagreements between human evaluators and AI scoring",
      "Built confidence to roll out full AI-driven quality monitoring in production",
      "Helped product and data teams iterate faster with safe experimentation",
    ],
    role: "Lead AI QA Engineer",
    techStack: ["Python", "pytest", "Statistical Analysis", "Multi-language Testing"],
    headlineOutcome:
      "Reduced disagreements between human evaluators and AI scoring",
    keyMetrics: [
      { label: "Interactions evaluated", value: "100%" },
      { label: "Languages supported", value: "15+" },
      { label: "KPI calculations validated", value: "CSAT, NPS, Compliance" },
    ],
    context:
      "Diabolocom's quality monitoring platform uses AI to evaluate 100% of customer interactions instead of small manual samples. The platform calculates KPIs like CSAT, NPS proxies, and compliance flags. The AI scoring must align with human evaluator judgments to be trusted by contact center managers and quality teams.",
    problem:
      "AI scoring models needed validation against human-labeled samples. KPI calculations required verification to ensure accuracy. Multi-language consistency was a concern, as the platform supports interactions in many languages. There was no systematic way to test for unexpected drifts in score distributions that could indicate model degradation.",
    approach:
      "I created a testing framework that compared AI scores against human-labeled samples, validating scoring models and identifying areas of disagreement. The framework tested KPI calculations across different scenarios and validated multi-language consistency. I implemented automated checks for score distribution drifts that could indicate model issues.",
    implementation:
      "The framework used Python with pytest, integrating with the quality monitoring platform's APIs. Test cases included human-labeled samples with expected scores, allowing comparison against AI outputs. KPI calculation tests validated CSAT, NPS, and compliance flag logic. Multi-language tests ensured consistent scoring across languages. Drift detection monitored score distributions over time.",
    testingStrategy:
      "Tests were organized by evaluation type and language. Scoring model tests compared AI outputs against human labels, identifying areas of disagreement. KPI calculation tests validated mathematical correctness and edge cases. Multi-language tests ensured consistent behavior across supported languages. Drift detection ran continuously, alerting on unexpected changes in score distributions.",
    results:
      "The framework reduced disagreements between human evaluators and AI scoring by identifying and addressing problematic scenarios. The team gained confidence to roll out full AI-driven quality monitoring in production, knowing that scoring was validated. Product and data teams could iterate faster with safe experimentation, as the framework caught regressions early.",
    learnings:
      "Testing AI scoring systems requires comparison against human judgment, but also understanding that some disagreement is expected. KPI calculation validation is critical for trust in the platform. Multi-language testing ensures consistent quality across diverse user bases. Drift detection provides early warning of model degradation or data distribution changes.",
  },
  // Energy
  {
    slug: "ovo-energy-trading-platform",
    title: "OVO Energy – Energy Trading Platform Testing",
    category: "Energy",
    company: "OVO Energy",
    summary:
      "Built mocked trading services and Kubernetes-based test environments enabling high-volume test scenarios without hitting production trade limits.",
    highlights: [
      "Enabled high-volume test runs without waiting for daily trade limits",
      "Prevented several critical production issues related to trading edge cases",
      "Gave trading and risk teams faster feedback when new logic was deployed",
    ],
    role: "Senior QA Engineer",
    techStack: ["Kubernetes", "Docker", "Python", "Mock Services"],
    headlineOutcome:
      "Enabled high-volume test runs without production trade limits",
    keyMetrics: [
      { label: "Test scenarios per run", value: "100+" },
      { label: "Test execution time", value: "Minutes vs Days" },
      { label: "Critical bugs prevented", value: "Multiple" },
    ],
    context:
      "OVO Energy operates an internal energy trading and nomination platform used to place trades and manage grid nominations. The platform is critical for energy procurement and risk management. Production systems have strict limits—only one trade per day could be nominated in production, which severely limited testing capabilities.",
    problem:
      "Testing was constrained by production trade limits, making it impossible to run comprehensive test scenarios. Teams had to wait for daily limits to reset, slowing down development cycles. Edge cases involving extreme price swings and volume spikes were difficult to test. The trading and risk teams needed faster feedback when new logic was deployed.",
    approach:
      "I designed and implemented mocked trading services that simulated external dependencies, allowing tests to place many trades without hitting real limits. I created Kubernetes and Docker-based test environments that could run realistic integration tests in isolation. The framework supported test data generation for extreme scenarios like price swings and volume spikes.",
    implementation:
      "The framework used Kubernetes to orchestrate test environments with mocked external services. Docker containers provided isolated environments for different test scenarios. I created mock services that simulated trading APIs, market data feeds, and grid nomination systems. Test data generators could create scenarios with specific characteristics like extreme prices or high volumes.",
    testingStrategy:
      "Tests were organized by trading scenario type and risk category. Integration tests validated end-to-end flows from trade placement to nomination. Edge case tests covered extreme price swings, volume spikes, and error conditions. The suite ran in CI and could also be executed manually for specific scenarios. Results were reported to trading and risk teams for review.",
    results:
      "The framework enabled high-volume test runs without waiting for daily trade limits, dramatically accelerating development cycles. We prevented several critical production issues related to trading edge cases that would have been difficult to catch with limited testing. Trading and risk teams received faster feedback when new logic was deployed, improving confidence in releases.",
    learnings:
      "Mocking external dependencies is essential when production systems have strict limits. Kubernetes and Docker provide powerful tools for creating isolated test environments. Test data generation for edge cases is critical for catching issues that might not occur in normal scenarios. Faster feedback loops improve team confidence and enable more rapid iteration.",
  },
  // Marketing - WPP
  {
    slug: "wpp-campaign-orchestration-ui",
    title: "WPP – Campaign Orchestration UI Testing",
    category: "Marketing",
    company: "WPP",
    summary:
      "Built Playwright-based UI automation for campaign creation, targeting, and approval workflows, reducing UI regression issues around campaign setups.",
    highlights: [
      "Reduced UI regression issues around campaign setups",
      "Made it safer to roll out new features for marketers in different regions",
      "Comprehensive coverage of critical campaign workflows",
    ],
    role: "Senior QA Engineer",
    techStack: ["Playwright", "TypeScript", "CI/CD"],
    headlineOutcome:
      "Reduced UI regression issues around campaign setups",
    keyMetrics: [
      { label: "Campaign workflows covered", value: "20+" },
      { label: "UI regression reduction", value: "Significant" },
      { label: "Multi-region support", value: "Validated" },
    ],
    context:
      "WPP operates an advertising campaign management suite used by marketers to create, target, and approve campaigns across multiple brands and regions. The platform handles complex workflows including budget allocation, audience selection, creative upload, and approval processes. UI reliability is critical, as marketers depend on the platform for time-sensitive campaign launches.",
    problem:
      "UI regression issues around campaign setups were impacting marketers' ability to launch campaigns on time. Manual regression testing was time-consuming and couldn't cover all scenarios. Multi-tenant and multi-brand configurations made testing complex. The team needed confidence that new features wouldn't break existing workflows, especially for marketers in different regions.",
    approach:
      "I built a comprehensive Playwright-based UI automation framework focused on campaign workflows. The framework covered critical flows like campaign creation, targeting configuration, budget allocation, and approval steps. I designed tests to handle multi-tenant and multi-brand scenarios, ensuring that new features worked correctly across different configurations.",
    implementation:
      "The framework used Playwright with TypeScript, organized into page objects for maintainability. Tests were structured by workflow type and user role. I created test data management utilities that could set up campaigns with specific configurations. The framework supported multiple environments and could run tests against different brand and region configurations.",
    testingStrategy:
      "Tests were organized by campaign workflow and user role. Critical path tests ran on every commit, while comprehensive regression suites ran before releases. Multi-tenant and multi-brand tests validated that features worked correctly across different configurations. The suite ran in CI/CD pipelines and could also be executed manually for specific scenarios.",
    results:
      "The framework reduced UI regression issues around campaign setups, improving marketer confidence and reducing support tickets. It became safer to roll out new features for marketers in different regions, as the automated tests validated multi-tenant and multi-brand scenarios. The approach became a model for UI testing across other WPP platforms.",
    learnings:
      "UI testing for campaign management platforms requires understanding complex workflows and multi-tenant scenarios. Page Object Models make tests maintainable as UIs evolve. Comprehensive coverage of critical paths is essential for preventing regressions that impact users. Multi-configuration testing ensures features work correctly across diverse usage contexts.",
  },
  {
    slug: "wpp-backend-campaign-apis",
    title: "WPP – Backend Testing for Campaign APIs",
    category: "Marketing",
    company: "WPP",
    summary:
      "Developed comprehensive integration tests for campaign lifecycle APIs, ensuring correct data sync with downstream systems and reliable high-volume campaign launches.",
    highlights: [
      "Improved API reliability for high-volume campaign launches",
      "Detected subtle bugs in schedule calculations before launch windows opened",
      "Validated data sync with downstream analytics and billing systems",
    ],
    role: "Senior QA Engineer",
    techStack: ["Node.js", "REST Assured", "Integration Testing"],
    headlineOutcome:
      "Improved API reliability for high-volume campaign launches",
    keyMetrics: [
      { label: "APIs tested", value: "15+" },
      { label: "Campaign lifecycle coverage", value: "Full" },
      { label: "Downstream integrations", value: "Validated" },
    ],
    context:
      "WPP's campaign management platform exposes REST APIs for campaign lifecycle operations including create, update, pause, archive, and scheduling. These APIs integrate with downstream systems like analytics platforms and billing systems. API reliability is critical, as high-volume campaign launches depend on consistent performance and correct data synchronization.",
    problem:
      "API reliability issues were impacting high-volume campaign launches. Data synchronization with downstream systems wasn't always validated, leading to discrepancies. Schedule calculations had subtle bugs that could cause campaigns to launch at wrong times. The team needed comprehensive API testing that validated both functionality and integrations.",
    approach:
      "I built comprehensive integration test suites using Node.js and REST Assured patterns. The framework tested all campaign lifecycle APIs with various scenarios and edge cases. I created tests that validated data synchronization with downstream systems, ensuring that campaign changes were correctly reflected in analytics and billing. Schedule calculation tests validated timezone handling and edge cases.",
    implementation:
      "The framework used Node.js with testing libraries, organized by API endpoint and scenario type. Tests covered create, update, pause, archive, and scheduling operations. Integration tests validated data flow to downstream systems by checking analytics events and billing records. Schedule tests validated timezone conversions and edge cases like daylight saving time transitions.",
    testingStrategy:
      "Tests were organized by API endpoint and operation type. Critical path tests ran on every commit, while comprehensive suites ran before releases. Integration tests validated data synchronization with downstream systems. Schedule calculation tests covered timezone scenarios and edge cases. The suite ran in CI/CD pipelines and could be executed manually for specific scenarios.",
    results:
      "The framework improved API reliability for high-volume campaign launches by catching issues early. We detected subtle bugs in schedule calculations before launch windows opened, preventing potential campaign timing issues. Validated data synchronization gave teams confidence that campaign changes were correctly reflected in downstream systems. The approach became a model for API testing across WPP platforms.",
    learnings:
      "API testing for campaign management requires understanding lifecycle operations and downstream integrations. Data synchronization validation is critical for ensuring consistency across systems. Schedule calculation testing must account for timezone complexities and edge cases. Comprehensive integration testing prevents issues that might only appear under high-volume conditions.",
  },
  {
    slug: "wpp-reporting-attribution-validation",
    title: "WPP – Reporting and Attribution Data Validation",
    category: "Marketing",
    company: "WPP",
    summary:
      "Built automated data validation for campaign reporting pipelines, ensuring accurate attribution and detecting anomalies before reports reach clients.",
    highlights: [
      "Reduced client-facing reporting issues",
      "Increased trust in attribution numbers from internal and external stakeholders",
      "Automated anomaly detection for key KPIs",
    ],
    role: "Senior QA Engineer",
    techStack: ["Python", "Data Validation", "ETL Testing"],
    headlineOutcome:
      "Reduced client-facing reporting issues",
    keyMetrics: [
      { label: "Data pipelines validated", value: "10+" },
      { label: "KPIs monitored", value: "Impressions, Clicks, Conversions, Cost" },
      { label: "Anomaly detection", value: "Automated" },
    ],
    context:
      "WPP's campaign management platform generates reports that aggregate impressions, clicks, conversions, and cost data. These reports are used by clients to evaluate campaign performance and make decisions. Data accuracy is critical, as reporting errors can impact client trust and business decisions. Reports must be validated against raw event streams to ensure accuracy.",
    problem:
      "Client-facing reporting issues were impacting trust and requiring manual corrections. There was no systematic validation of attribution numbers against raw event streams. Anomalies in key KPIs could go undetected until clients noticed discrepancies. The team needed automated validation that could catch data issues before reports reached clients.",
    approach:
      "I built automated data validation frameworks that cross-checked campaign reports against raw event streams. The framework validated that aggregated numbers matched source data and detected anomalies in key KPIs. I created automated checks that ran before reports were finalized, ensuring data accuracy and consistency.",
    implementation:
      "The framework used Python with data validation libraries, integrating with reporting pipelines and event streams. Validation tests compared aggregated report numbers against raw event data, checking for discrepancies. Anomaly detection monitored key KPIs for unexpected patterns or outliers. The framework could validate reports across multiple campaigns and time periods.",
    testingStrategy:
      "Tests were organized by report type and KPI category. Validation tests ran before reports were finalized, checking data accuracy and consistency. Anomaly detection monitored key KPIs continuously, alerting on unexpected patterns. The suite ran in CI/CD pipelines and could be executed manually for ad-hoc validation.",
    results:
      "The framework reduced client-facing reporting issues by catching data problems before reports were finalized. Increased validation gave internal and external stakeholders confidence in attribution numbers. Automated anomaly detection helped identify issues early, preventing client-facing problems. The approach became a model for data validation across WPP reporting systems.",
    learnings:
      "Data validation for reporting requires understanding both aggregated outputs and source data streams. Cross-checking reports against raw events is essential for ensuring accuracy. Anomaly detection provides early warning of data issues that might not be obvious in manual review. Automated validation prevents client-facing problems and builds trust in reporting systems.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getCaseStudiesByCategory(
  category?: CaseStudyCategory
): CaseStudy[] {
  if (!category) {
    return caseStudies;
  }
  return caseStudies.filter((study) => study.category === category);
}

