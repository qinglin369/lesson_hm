import { config } from 'dotenv';
// 文本加载器
import {TextLoader } from 'langchain/document_loaders/fs/text';
// 切割
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { ChatOpenAI, OpenAIEmbeddings } from '@langchain/openai';
// 向量数据库
import { MemoryVectorStore } from 'langchain/vectorstores/memory';
// 链
import { ConversationalRetrievalQAChain } from 'langchain/chains';

config();

const loader = new TextLoader('data/test.txt');
const docs = await loader.load();

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 100,// 100 个字符 
  chunkOverlap: 20, // 20 个字符的重叠
});

const splitDocs = await splitter.splitDocuments(docs);
// console.log(splitDocs);

const embeddings = new OpenAIEmbeddings();
// 内存向量数据库
const vectorStore = new MemoryVectorStore(embeddings);
await vectorStore.addDocuments(splitDocs);

// console.log(vectorStore.memoryVectors);

// 数据已经在向量数据库
// 创建检索器
const retriver = vectorStore.asRetriever(2);
// const res = await retriver.invoke('特朗普')
// console.log(res, '--------')

const chatModel = new ChatOpenAI({
  temperature: 0,
})

const qaChain = ConversationalRetrievalQAChain.fromLLM(
  chatModel,
  retriver
)

const question = "我是谁？"
const response = await qaChain.call({
  question,
  chat_history: [],
})
console.log(response.text, '////')