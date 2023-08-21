return {
  -- essential plugins
  {
    "tpope/vim-surround",
  -- config = function()
  --   vim.g.surround_no_insert_mappings = 1
  --   vim.g.surround_no_mappings = 1
  -- end,
  },
  {
    "vim-scripts/ReplaceWithRegister",
  },
  -- comment with gc
  {
    "numToStr/Comment.nvim",
    opts = {},
  }
}