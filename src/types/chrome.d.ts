declare namespace chrome {
  export namespace runtime {
    const onInstalled: {
      addListener: (callback: () => void) => void;
    };
    function openOptionsPage(): void;
  }
  
  export namespace storage {
    interface StorageData {
      [key: string]: any;
    }
    const local: {
      get(key: string): Promise<StorageData>;
    };
  }
  
  export namespace tabs {
    function captureVisibleTab(options: { format: string }): Promise<string>;
  }
} 