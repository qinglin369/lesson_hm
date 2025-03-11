import axios from 'axios';

const url = ' https://api.coze.cn/v1/conversation/create';
const apiKey = 'pat_zf2J1pn7KJVZnHZBRWw9MyVWmCHncrhK6d81BJfNy5O36sWC9fsJyS3ZEF265RKq';
const botId = '7398905353180184614';

import type { FetchDataRequest } from '../types/cozeConfig';

async function getCozeData(content: string): Promise<any> {
    const headers = {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
    };

    const data: FetchDataRequest = {
        "bot_id": botId,
        "conversation_id": "123456",
        "user": "user_1",
        "query": content,
        "stream": false,
        "chat_history": [
            { "role": "user" },
            { "role": "assistant", "type": "answer" }
        ]
    };

    try {
        const response: any = await axios.post(url, data, { headers });

        console.log(response);

        return response;

    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
export default getCozeData