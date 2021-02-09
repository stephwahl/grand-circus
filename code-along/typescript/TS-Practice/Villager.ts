interface Tool {
    health: number,
    type: string
}

class Villager {
    pockets: [];
    tools: any;

    constructor(public name: string, public birthday: Date, public catchPhrase: string) {
      this.pockets = [];
      this.tools = {
        hammer: {
          health: 2,
          type: "basic",
        },
      };
    }
  
    sayHello(): string {
      return `Hello, my name is ${this.name} and I was born on ${this.birthday}. ${this.catchPhrase}!`;
    }
  
    addToPockets(item: any) {
        this.pockets.push(item);
    }
  
    useTool(toolName: string) {
      if (this.tools[toolName]) {
        const tool: Tool = this.tools[toolName];
        tool.health--;
        if (tool.health <= 0) {
          // the tool broke :()
          console.log(`Oh no! That's it for my trusty ${tool.type} ${toolName}`);
          // remove from object
          delete this.tools[toolName];
        }
      }
    }
  }