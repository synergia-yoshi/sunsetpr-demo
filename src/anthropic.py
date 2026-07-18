from typing import Any
from anthropic import Anthropic


def classify(client: Anthropic, text: str) -> Any:
    return client.messages.create(
        model="claude-3-5-sonnet-20241022",
        max_tokens=128,
        messages=[{"role": "user", "content": text}],
    )
