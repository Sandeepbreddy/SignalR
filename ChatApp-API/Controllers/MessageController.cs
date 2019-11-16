using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace ChatApp_API.Controllers {

    [Route ("api/messages")]
    public class MessageController : Controller {
        public IHubContext<MessageHub> _messageHubContext { get; }

        public MessageController (IHubContext<MessageHub> messageHubContext) {
            this._messageHubContext = messageHubContext;
        }
        public IActionResult Post (string message) {
            this._messageHubContext.Clients.All.SendAsync ("send", message);
            return Ok ();
        }
    }
}