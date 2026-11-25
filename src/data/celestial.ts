// Content snapshots for review-only twin routes. See CELESTIAL-PREVIEW.md for provenance.
export interface ProjectContent {
  id: 'apollo' | 'diana'; name: string; subtitle: string;
  paper: string; paperNote: string; code: string; docs: string;
  frameworkTitle: string; intro: string; demos?: {label: string; text: string; gif: string}[]; overview: string; overviewCaption: string; exploreTitle: string;
  stages: {short: string; title: string; description: string; image: string; caption: string; link: string}[];
  startTitle: string; startDescription?: string; startDocs: string;
  setup: {title: string; code: string}[]; examples: {title: string; language: string; code: string}[];
  authors: string; citation: string;
}

export const apollo: ProjectContent = {
  "id": "apollo",
  "name": "AlphaApollo",
  "subtitle": "A System for Deep Agentic Reasoning",
  "paper": "https://arxiv.org/abs/2510.06261",
  "paperNote": "arXiv:2510.06261v2 · March 2026",
  "code": "https://github.com/tmlr-group/AlphaApollo",
  "docs": "/docs/intro",
  "frameworkTitle": "Overview",
  "intro": "AlphaApollo is an agentic reasoning framework that integrates multiple models and tools to enable iterative, verifiable, and self-evolving reasoning. It supports a wide range of agentic reasoning paradigms, including tool-integrated reasoning, agentic post-training (multi-turn SFT and reinforcement learning), and agentic self-evolution. AlphaApollo incorporates multiple post-training algorithms such as PPO, GRPO, and DAPO, and provides dataset-backed agentic evaluation pipelines. AlphaApollo also offers flexible and extensible agentic environments and tool-set configurations, allowing users to easily customize, extend, and scale agentic reasoning workflows.",
  "overview": "/img/framework-v2-alphaapollo-compressed.png",
  "overviewCaption": "AlphaApollo framework: professional tools and multiple model participants support iterative solution refinement.",
  "exploreTitle": "Reasoning, learning, and evolution",
  "stages": [
    {
      "short": "Reasoning",
      "title": "Multi-turn agentic reasoning",
      "description": "Multi-turn agentic reasoning through an iterative cycle of model reasoning, tool execution, and environment feedback.",
      "image": "/img/agentic_reasoning.jpg",
      "caption": "AlphaApollo reasoning: model–environment interaction with structured tool calls and responses.",
      "link": "/multi-turn-agentic-reasoning"
    },
    {
      "short": "Learning",
      "title": "Multi-turn agentic learning",
      "description": "Stable agentic learning via turn-level optimization that decouples model generations and environmental feedback.",
      "image": "/img/agentic_learning.jpg",
      "caption": "AlphaApollo learning: model-generated actions are separated from environmental feedback during optimization.",
      "link": "/multi-turn-agentic-learning"
    },
    {
      "short": "Evolution",
      "title": "Multi-round agentic evolution",
      "description": "Multi-round agentic evolution through a propose-judge-update evolutionary loop with long-term memory.",
      "image": "/img/agentic_evolution.jpg",
      "caption": "AlphaApollo evolution: iterative refinement with verification and long-term memory.",
      "link": "/multi-round-agentic-evolution"
    }
  ],
  "demos": [
  {
    "label": "Question 1",
    "text": "Every morning Aya goes for a 9-kilometer-long walk and stops at a coffee shop afterwards. When she walks at a constant speed of $s$ kilometers per hour, the walk takes her 4 hours, including $t$ minutes spent in the coffee shop. When she walks $s+2$ kilometers per hour, the walk takes her 2 hours and 24 minutes, including $t$ minutes spent in the coffee shop. Suppose Aya walks at $s+\\frac{1}{2}$ kilometers per hour. Find the number of minutes the walk takes her, including the $t$ minutes spent in the coffee shop.",
    "gif": "/img/demo_q1.gif"
  },
  {
    "label": "Question 2",
    "text": "Jen enters a lottery by picking 4 distinct numbers from $S=\\{1, 2, 3, \\dots, 9, 10\\}$. 4 numbers are randomly chosen from $S$. She wins a prize if at least two of her numbers were of the randomly chosen numbers, and wins the grand prize if all four of her numbers were the randomly chosen numbers. The probability of her winning the grand prize given that she won a prize is $m/n$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.",
    "gif": "/img/demo_q2.gif"
  },
  {
    "label": "Question 3",
    "text": "Find the largest possible real part of $(75+117i)z+\\frac{96+144i}{z}$ where $z$ is a complex number with $|z|=4$.",
    "gif": "/img/demo_q3.gif"
  },
  {
    "label": "Followup 1",
    "text": "Could you write a short Python script using SymPy to solve the system of equations for $s$ and $t$, and then calculate the final answer in minutes?",
    "gif": "/img/demo_f1.gif"
  },
  {
    "label": "Followup 2",
    "text": "Could you write a Python script to simulate this lottery 100,000 times and verify if the empirical probability closely matches your analytical result?",
    "gif": "/img/demo_f2.gif"
  },
  {
    "label": "Followup 3",
    "text": "Please write a Python program using `scipy.optimize` or a simple search over $\\theta \\in [0, 2\\pi]$ to numerically find the maximum real part of this expression and verify your analytical maximum.",
    "gif": "/img/demo_f3.gif"
  }
],
  "startTitle": "Quick start",
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
  "authors": "Zhanke Zhou · Chentao Cao · Xiao Feng · Xuan Li · Zongze Li · Xiangyu Lu · Jiangchao Yao · Weikai Huang · Tian Cheng · Jianghangfan Zhang · Tangyu Jiang · Linrui Xu · Yiming Zheng · Brando Miranda · Tongliang Liu · Sanmi Koyejo · Masashi Sugiyama · Bo Han",
  "citation": "@misc{zhou2026alphaapollo,\n  title={AlphaApollo: A System for Deep Agentic Reasoning},\n  author={Zhanke Zhou and Chentao Cao and Xiao Feng and Xuan Li and Zongze Li and Xiangyu Lu and Jiangchao Yao and Weikai Huang and Tian Cheng and Jianghangfan Zhang and Tangyu Jiang and Linrui Xu and Yiming Zheng and Brando Miranda and Tongliang Liu and Sanmi Koyejo and Masashi Sugiyama and Bo Han},\n  year={2026},\n  eprint={2510.06261},\n  archivePrefix={arXiv},\n  primaryClass={cs.AI},\n  url={https://arxiv.org/abs/2510.06261}\n}"
};

export const diana: ProjectContent = {
  "id": "diana",
  "name": "AlphaDiana",
  "subtitle": "A Measurement System for Agents in Verifiable Reasoning Tasks",
  "paper": "https://arxiv.org/abs/2610.20675",
  "paperNote": "arXiv:2610.20675v1 · October 2026",
  "code": "https://github.com/AndrewZhou924/AlphaDiana-dev",
  "docs": "https://alphadiana.org/docs/intro",
  "frameworkTitle": "Overview",
  "intro": "A harness controls how a model uses prompts, tools and persistent state. AlphaDiana runs agents on benchmarks, scores their answers and saves execution evidence for later analysis.",
  "overview": "/img/twin/position.png",
  "overviewCaption": "Figure 1. Position of AlphaDiana: from stateless model evaluation to harness-aware agent measurement.",
  "exploreTitle": "Compare, inspect, and intervene",
  "stages": [
    {
      "short": "Compare",
      "title": "Compare complete agents",
      "description": "Compare scores and resource use across model–harness combinations on the same tasks. Keep task definitions, scoring, and budgets explicit.",
      "image": "/img/twin/system.png",
      "caption": "Figure 3. AlphaDiana system design, from configuration through saved evidence and analysis.",
      "link": "https://alphadiana.org/docs/concepts/harness-aware-evaluation"
    },
    {
      "short": "Inspect",
      "title": "Inspect execution evidence",
      "description": "Inspect wrong answers through execution status, tool interactions and saved action patterns. Keep missing resource evidence distinct from zero consumption.",
      "image": "/img/twin/alphadiana-overview.png",
      "caption": "Measurement examples from the finalized README. Each plot labels its model, benchmark and metric.",
      "link": "https://alphadiana.org/docs/intro"
    },
    {
      "short": "Intervene",
      "title": "Test tools, skills and memory",
      "description": "Change tools, skills or memory and compare outcomes under recorded tasks and budgets. The published memory study includes Cross-Rollout, Cross-Task and frozen Cross-Dataset conditions; effects depend on the configuration.",
      "image": "/img/twin/position.png",
      "caption": "AlphaDiana positions component interventions within evaluation of the complete agent. See Section 4 and Appendix D for the intervention protocols.",
      "link": "https://arxiv.org/abs/2610.20675v1"
    }
  ],
  "startTitle": "Quick start",
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
  "authors": "Zhanke Zhou · Zongze Li · Weikai Huang · Xuan Li · Chentao Cao · Xiao Feng · Xiangyu Lu · Jinbo Hu · Yi Xie · Nico Pelleriti · Shiyang Liu · Menghan Lu · Max Zimmer · Brando Miranda · Jiangchao Yao · Bo Liu · Sanmi Koyejo · Sebastian Pokutta · Bo Han",
  "citation": "@article{zhou2026alphadiana,\n  title = {{AlphaDiana}: A Measurement System for Agents in Verifiable Reasoning Tasks},\n  author={Zhanke Zhou and Zongze Li and Weikai Huang and Xuan Li and Chentao Cao and Xiao Feng and Xiangyu Lu and Jinbo Hu and Yi Xie and Nico Pelleriti and Shiyang Liu and Menghan Lu and Max Zimmer and Brando Miranda and Jiangchao Yao and Bo Liu and Sanmi Koyejo and Sebastian Pokutta and Bo Han},\n  journal = {arXiv preprint arXiv:2610.20675},\n  year = {2026}\n}"
};
