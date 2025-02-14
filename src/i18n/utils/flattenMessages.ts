type NestedMessages = {
  [key: string]: string | string[] | NestedMessages;
};

type FlatMessages = {
  [key: string]: string;
};

export function flattenMessages(nestedMessages: NestedMessages, prefix = ''): FlatMessages {
  return Object.keys(nestedMessages).reduce((messages: FlatMessages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      messages[prefixedKey] = value;
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        messages[`${prefixedKey}.${index}`] = item;
      });
    } else if (value !== null && typeof value === 'object') {
      Object.assign(messages, flattenMessages(value as NestedMessages, prefixedKey));
    }

    return messages;
  }, {});
} 