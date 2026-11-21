import axios from "axios";

export async function getSacrudaBuild() {
  try {
    const response = await axios.get("https://os.sacruda.nl/build", {
      responseType: "text",
    });

    return `${response.data}`.split("\n")[0].trim();
  } catch {
    return undefined;
  }
}
