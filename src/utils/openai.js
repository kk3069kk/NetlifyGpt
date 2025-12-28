import OpenAI from 'openai';
import { Api_key } from './constants';

const client = new OpenAI({
  apiKey: Api_key, 
  dangerouslyAllowBrowser: true,
});

export default client;