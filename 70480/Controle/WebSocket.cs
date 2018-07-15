using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net.Sockets;

namespace _70480.Controle
{
    public class WebSocket
    {
        Socket listener;
        Socket ClienteSocket;
        byte[] clienteBuffer = new byte[1024];

        WebSocket()
        {
            listener = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.IP);
            //bind o socket na porta que queremos
            //listener.Bind(new IpEndPoint )
        }
    }
}