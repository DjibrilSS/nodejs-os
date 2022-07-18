import os from "os";

function osType() {
  console.log(`Привет, юзер. Вижу ты зашел с ${os.type()}`);
}

export { osType };
