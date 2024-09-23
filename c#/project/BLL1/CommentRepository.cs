using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
using AutoMapper;
namespace BLL
{
    public class CommentRepository:ICommentRepository
    {
        C_AND_E c_and_e;
        IMapper mapper; 
        public CommentRepository(C_AND_E c_and_e, IMapper mapper)
        {
            this.c_and_e = c_and_e;
            this.mapper = mapper;
        }
        public List<CommentDTO> GetComments()
        {
            List<Comment>coments= c_and_e.Comments.ToList();
            return mapper.Map<List<CommentDTO>>(coments);

        }
        public CommentDTO GetById(int id)
        {
            Comment comment= c_and_e.Comments.Find(id);
            return mapper.Map<CommentDTO>(comment);

        }
        
        public void AddComment(CommentDTO comment)
        {
            c_and_e.Comments.Add(mapper.Map<Comment>(comment));
            c_and_e.SaveChanges();
        }
        public void DeleteComment(CommentDTO comment)
        {
            c_and_e.Comments.Remove(mapper.Map<Comment>(comment));
            c_and_e.SaveChanges();
        }

        public void UpdateComment(CommentDTO comment)
        {
            c_and_e.Comments.Update(mapper.Map<Comment>(comment));
            c_and_e.SaveChanges();
        }
    }
}
