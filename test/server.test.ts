import Server from '../src/server';

describe('server class', () => {
    it('should return port 8080.', () => {
        const server: Server = new Server(8080);
        const port: number = server.getPort();

        expect(port).toBe(8080);
    });
});
