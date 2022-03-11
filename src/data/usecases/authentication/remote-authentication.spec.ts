class RemoteAuthentication {
  constructor(private readonly url: string) {}

  async auth(): Promise<void> {
    return Promise.resolve();
  }
}

describe("RemoteAuthentication", () => {
  test("Should call HttpClient with correct URL", async () => {
    const url = "any_url";
    const httpClient = new HttpClient();
    const sut = new RemoteAuthentication(url); //system under test
    await sut.auth();
    expect(httpClient.url).toBe(url);
  });
});
