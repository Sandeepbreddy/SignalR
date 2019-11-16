using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace ChatApp_API {
    public class MessageHub : Hub {
        public Task Send (string message) {
            return Clients.All.SendAsync ("Send", message);
        }
    }
}