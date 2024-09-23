using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
namespace BLL
{
    public interface ICommentRepository
    {
        List<CommentDTO> GetComments();
        CommentDTO GetById(int id);
        void AddComment(CommentDTO comment);
        void DeleteComment(CommentDTO comment);

        void UpdateComment(CommentDTO comment);
    }
}
