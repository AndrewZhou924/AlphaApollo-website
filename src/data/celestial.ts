// Content snapshots for review-only twin routes. See CELESTIAL-PREVIEW.md for provenance.
export interface ProjectContent {
  id: 'apollo' | 'diana'; name: string; subtitle: string; eyebrow: string; deck: string;
  paper: string; paperNote: string; code: string; docs: string;
  frameworkTitle: string; intro: string; overview: string; overviewCaption: string; exploreTitle: string;
  stages: {short: string; title: string; kicker: string; description: string; flow: string[]; image: string; caption: string; link: string}[];
  startTitle: string; startDescription: string; startDocs: string;
  setup: {title: string; code: string}[]; examples: {title: string; language: string; code: string}[];
  researchTitle: string; researchDescription: string; authors: string; citation: string; relatedDescription: string;
}

export const apollo: ProjectContent = {
  "id": "apollo",
  "name": "AlphaApollo",
  "subtitle": "A System for Deep Agentic Reasoning",
  "eyebrow": "MODELS × TOOLS × ITERATION",
  "deck": "Multi-turn agentic reasoning, multi-turn agentic learning, and multi-round agentic evolution.",
  "paper": "https://arxiv.org/abs/2510.06261",
  "paperNote": "arXiv:2510.06261v2 · March 2026",
  "code": "https://github.com/tmlr-group/AlphaApollo",
  "docs": "/docs/intro",
  "frameworkTitle": "An integrated agentic system",
  "intro": "AlphaApollo is an agentic reasoning framework that integrates multiple models and tools to enable iterative, verifiable, and self-evolving reasoning. It supports tool-integrated reasoning, agentic post-training, and agentic self-evolution.",
  "overview": "/img/framework-v2-alphaapollo-compressed.png",
  "overviewCaption": "AlphaApollo framework: professional tools and multiple model participants support iterative solution refinement. Original figure from the existing project website.",
  "exploreTitle": "Reasoning, learning, and evolution",
  "stages": [
    {
      "short": "Reasoning",
      "title": "Multi-turn agentic reasoning",
      "kicker": "MODEL ↔ ENVIRONMENT",
      "description": "An iterative cycle of model reasoning, tool execution, and environment feedback. Each turn contributes to the context for the next.",
      "flow": [
        "Reason",
        "Execute tools",
        "Read feedback"
      ],
      "image": "/img/agentic_reasoning.jpg",
      "caption": "Original AlphaApollo reasoning figure: model–environment interaction with structured tool calls and responses.",
      "link": "/multi-turn-agentic-reasoning"
    },
    {
      "short": "Learning",
      "title": "Multi-turn agentic learning",
      "kicker": "TURN-LEVEL OPTIMIZATION",
      "description": "Stable agentic learning via turn-level optimization that decouples model generations and environmental feedback.",
      "flow": [
        "Collect trajectories",
        "Assign rewards",
        "Update the policy"
      ],
      "image": "/img/agentic_learning.jpg",
      "caption": "Original AlphaApollo learning figure: model-generated actions are separated from environmental feedback during optimization.",
      "link": "/multi-turn-agentic-learning"
    },
    {
      "short": "Evolution",
      "title": "Multi-round agentic evolution",
      "kicker": "PROPOSE → JUDGE → UPDATE",
      "description": "Multi-round agentic evolution through a propose–judge–update loop with tool-assisted verification and long-term memory.",
      "flow": [
        "Propose solutions",
        "Verify with tools",
        "Update memory"
      ],
      "image": "/img/agentic_evolution.jpg",
      "caption": "Original AlphaApollo evolution figure: iterative refinement with verification and long-term memory.",
      "link": "/multi-round-agentic-evolution"
    }
  ],
  "startTitle": "Choose your next experiment.",
  "startDescription": "Explore the workflow examples from the current Apollo website. Prepare the environment and model services before running the commands.",
  "startDocs": "/docs/getting-started/installation",
  "setup": [
    {
      "title": "Installation",
      "code": "conda create -n alphaapollo python==3.12 -y\nconda activate alphaapollo\n\ngit clone https://github.com/tmlr-group/AlphaApollo.git\ncd AlphaApollo\n\nbash installation.sh"
    }
  ],
  "examples": [
    {
      "title": "Reasoning",
      "language": "bash",
      "code": "# Method 1: workflow entrypoint\n# no-tool reasoning\npython3 -m alphaapollo.workflows.test \\\n  --model.path=Qwen/Qwen2.5-3B-Instruct \\\n  --preprocess.data_source=math-ai/aime24\n\n# tool-integrated reasoning\npython3 -m alphaapollo.workflows.test \\\n  --model.path=Qwen/Qwen2.5-3B-Instruct \\\n  --preprocess.data_source=math-ai/aime24 \\\n  --env.informal_math.enable_python_code=true \\\n  --env.informal_math.enable_local_rag=false \\\n  --env.max_steps=4\n\n# Method 2: script entrypoint\nbash examples/test/run_test_informal_math_no_tool.sh # no-tool reasoning\nbash examples/test/run_test_informal_math.sh # tool-integrated reasoning"
    },
    {
      "title": "Learning",
      "language": "bash",
      "code": "# Method 1: workflow entrypoint\n# multi-turn SFT\npython3 -m alphaapollo.workflows.sft \\\n  --model.partial_pretrain=Qwen/Qwen2.5-3B-Instruct \\\n  --preprocess.data_source=AI-MO/NuminaMath-TIR\n\n# multi-turn RL\npython3 -m alphaapollo.workflows.rl \\\n  --model.path=Qwen/Qwen2.5-3B-Instruct \\\n  --preprocess.data_source=HuggingFaceH4/MATH-500 \\\n  --algorithm.adv_estimator=grpo\n\n# Method 2: script entrypoints\nbash examples/sft/run_sft_informal_math_no_tool.sh # vanilla SFT\nbash examples/sft/run_sft_informal_math_tool.sh # multi-turn SFT\nbash examples/rl/run_rl_informal_math_no_tool.sh # vanilla RL (estimator=grpo by default)\nbash examples/rl/run_rl_informal_math_tool.sh # multi-turn RL (estimator=grpo by default)"
    },
    {
      "title": "Evolution",
      "language": "bash",
      "code": "# Before running, serve models:\npython alphaapollo/utils/ray_serve_llm.py \\\n  --model_path Qwen/Qwen3-4B-Instruct-2507 \\\n  --gpus \"0,1\" \\\n  --model_id \"qwen3_4b_inst\"\n\n# Method 1: workflow entrypoint\n# single-model evolution\npython3 -m alphaapollo.workflows.evo \\\n  --preprocess.data_source=math-ai/aime24 \\\n  --run.dataset_name=aime24 \\\n  --policy_model_cfg.model_name=qwen3_4b_inst \\\n  --verifier_cfg.model_name=qwen3_4b_inst \n\n# Method 2: script entrypoint\nbash examples/evo/run_evo_informal_math.sh # single-model evolution\nbash examples/evo/run_evo_informal_math_multi_models.sh # multi-model evolution"
    }
  ],
  "researchTitle": "From reasoning to self-evolution.",
  "researchDescription": "The technical report studies reasoning, learning, and evolution across math reasoning benchmarks. Read the paper for the experimental settings, results, and limitations.",
  "authors": "Zhanke Zhou · Chentao Cao · Xiao Feng · Xuan Li · Zongze Li · Xiangyu Lu · Jiangchao Yao · Weikai Huang · Tian Cheng · Jianghangfan Zhang · Tangyu Jiang · Linrui Xu · Yiming Zheng · Brando Miranda · Tongliang Liu · Sanmi Koyejo · Masashi Sugiyama · Bo Han",
  "citation": "@misc{zhou2026alphaapollo,\n  title={AlphaApollo: A System for Deep Agentic Reasoning},\n  author={Zhanke Zhou and Chentao Cao and Xiao Feng and Xuan Li and Zongze Li and Xiangyu Lu and Jiangchao Yao and Weikai Huang and Tian Cheng and Jianghangfan Zhang and Tangyu Jiang and Linrui Xu and Yiming Zheng and Brando Miranda and Tongliang Liu and Sanmi Koyejo and Masashi Sugiyama and Bo Han},\n  year={2026},\n  eprint={2510.06261},\n  archivePrefix={arXiv},\n  primaryClass={cs.AI},\n  url={https://arxiv.org/abs/2510.06261}\n}",
  "relatedDescription": "AlphaApollo develops agentic reasoning systems. AlphaDiana measures agents on verifiable reasoning tasks."
};

export const diana: ProjectContent = {
  "id": "diana",
  "name": "AlphaDiana",
  "subtitle": "A Measurement System for Agents in Verifiable Reasoning Tasks",
  "eyebrow": "AGENTS × EVIDENCE × MEASUREMENT",
  "deck": "Compare scores and traces on verifiable reasoning tasks. Test tools, skills and memory.",
  "paper": "https://arxiv.org/abs/2610.20675",
  "paperNote": "arXiv:2610.20675v1 · October 2026",
  "code": "https://github.com/AndrewZhou924/AlphaDiana-dev",
  "docs": "https://alphadiana.org/docs/intro",
  "frameworkTitle": "Look beyond the final answer.",
  "intro": "A harness controls how a model uses prompts, tools and persistent state. AlphaDiana runs agents on benchmarks, scores their answers and saves execution evidence for later analysis.",
  "overview": "/img/twin/position.png",
  "overviewCaption": "Figure 1. Position of AlphaDiana: from stateless model evaluation to harness-aware agent measurement. Original paper figure.",
  "exploreTitle": "Compare, inspect, and intervene",
  "stages": [
    {
      "short": "Compare",
      "title": "Compare complete agents",
      "kicker": "MACRO MEASUREMENT",
      "description": "Compare scores and resource use across model–harness combinations on the same tasks. Keep task definitions, scoring, and budgets explicit.",
      "flow": [
        "Configure",
        "Run and score",
        "Compare"
      ],
      "image": "/img/twin/system.png",
      "caption": "Figure 3. AlphaDiana system design, from configuration through saved evidence and analysis. Original paper figure.",
      "link": "https://alphadiana.org/docs/concepts/harness-aware-evaluation"
    },
    {
      "short": "Inspect",
      "title": "Inspect execution evidence",
      "kicker": "TRACE-LEVEL ANALYSIS",
      "description": "Inspect wrong answers through execution status, tool interactions and saved action patterns. Keep missing resource evidence distinct from zero consumption.",
      "flow": [
        "Save evidence",
        "Inspect traces",
        "Analyze outcomes"
      ],
      "image": "/img/twin/alphadiana-overview.png",
      "caption": "Measurement examples from the finalized README. Each plot labels its model, benchmark and metric.",
      "link": "https://alphadiana.org/docs/intro"
    },
    {
      "short": "Intervene",
      "title": "Test tools, skills and memory",
      "kicker": "MICRO INTERVENTIONS",
      "description": "Change tools, skills or memory and compare outcomes under recorded tasks and budgets. The published memory study includes Cross-Rollout, Cross-Task and frozen Cross-Dataset conditions; effects depend on the configuration.",
      "flow": [
        "Fix the conditions",
        "Change a component",
        "Compare outcomes"
      ],
      "image": "/img/twin/position.png",
      "caption": "AlphaDiana positions component interventions within evaluation of the complete agent. Original paper figure; consult Section 4 and Appendix D for the intervention protocols.",
      "link": "https://arxiv.org/abs/2610.20675v1"
    }
  ],
  "startTitle": "Run, save, analyze.",
  "startDescription": "Run OpenCode on three AIME 2026 tasks with Qwen3.5-27B. This is the finalized README onboarding example, not the full paper experiment.",
  "startDocs": "https://github.com/AndrewZhou924/AlphaDiana-dev/blob/5721533be9c1d66a2e37c6dadc99b0c6ce284c90/README.md",
  "setup": [
    {
      "title": "Installation",
      "code": "git clone https://github.com/AndrewZhou924/AlphaDiana-dev.git\ncd AlphaDiana-dev\ngit checkout 5721533be9c1d66a2e37c6dadc99b0c6ce284c90\nuv venv --python 3.10 .venv\nsource .venv/bin/activate\nuv pip install -e '.[analysis,benchmarks,agents]'"
    },
    {
      "title": "Model endpoint",
      "code": "export OPENAI_BASE_URL=\"https://your-provider.example/v1\"\nexport OPENAI_API_KEY=\"your-api-key\"\nexport OPENAI_MODEL_NAME=\"Qwen/Qwen3.5-27B\""
    },
    {
      "title": "Podman controller",
      "code": "podman build \\\n  -f alphadiana/harness/opencode/deploy/Containerfile.podman-controller \\\n  -t localhost/alphadiana-opencode-podman:latest \\\n  alphadiana/harness/opencode/deploy"
    }
  ],
  "examples": [
    {
      "title": "CLI",
      "language": "bash",
      "code": "alphadiana validate configs/examples/aime2026_opencode.yaml\nalphadiana compute configs/examples/aime2026_opencode.yaml\nalphadiana analyzer results/aime_opencode_cli.jsonl --output-dir figures/aime_opencode_cli"
    },
    {
      "title": "Python API",
      "language": "python",
      "code": "import alphadiana as ad\n\nagent = ad.agent(\n    \"opencode\", version=\"1.3.2\", controller_mode=\"podman\",\n    controller_image=\"localhost/alphadiana-opencode-podman:latest\",\n)\ndata = ad.dataset(\"MathArena/aime_2026\", benchmark=\"aime\", max_tasks=3)\nscorer = ad.scorer.create(\"numeric\")\n\nartifacts = ad.runner(\n    run_id=\"aime_opencode_api\", num_samples=1, task_retries=0, strict_report=True,\n).compute(agent=agent, data=data, scorer=scorer)\n\nad.analyzer(artifacts).export(\"figures/aime_opencode_api\")"
    }
  ],
  "researchTitle": "A score is only the beginning.",
  "researchDescription": "The paper connects correctness with execution traces, component interventions and resource measurements. Harness effects depend on the model and task; inspect the settings and evidence coverage alongside the scores.",
  "authors": "Zhanke Zhou · Zongze Li · Weikai Huang · Xuan Li · Chentao Cao · Xiao Feng · Xiangyu Lu · Jinbo Hu · Yi Xie · Nico Pelleriti · Shiyang Liu · Menghan Lu · Max Zimmer · Brando Miranda · Jiangchao Yao · Bo Liu · Sanmi Koyejo · Sebastian Pokutta · Bo Han",
  "citation": "@article{zhou2026alphadiana,\n  title = {{AlphaDiana}: A Measurement System for Agents in Verifiable Reasoning Tasks},\n  author={Zhanke Zhou and Zongze Li and Weikai Huang and Xuan Li and Chentao Cao and Xiao Feng and Xiangyu Lu and Jinbo Hu and Yi Xie and Nico Pelleriti and Shiyang Liu and Menghan Lu and Max Zimmer and Brando Miranda and Jiangchao Yao and Bo Liu and Sanmi Koyejo and Sebastian Pokutta and Bo Han},\n  journal = {arXiv preprint arXiv:2610.20675},\n  year = {2026}\n}",
  "relatedDescription": "AlphaDiana measures agents on verifiable reasoning tasks. AlphaApollo develops agentic reasoning systems."
};
